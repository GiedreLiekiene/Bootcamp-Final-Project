import { useState } from "react";
import { ServerUrl } from "../../config";
import "./submitRecipeForm.css";

const SubmitRecipeForm = ({
}) => {
  // TODO : 
  // * send recipe photo in this form (extra request for upload)
  // * send sections in this form - needs UI with checkboxes
  // * do not allow submit a recipie if you don't have a token - send to login/singup
  // TODO :
  // * send user photo in signup form
  let loginInformation = JSON.parse(localStorage.getItem("loginInformation")) || {};
  console.log(loginInformation)
  let token = loginInformation.token;
  let userId = loginInformation._id;

  const [requestBody, setRequestBody] = useState({
    userId: userId,
    imageUrl: "/uploads/Baja-Pork-takos.jpeg",
    sections: ["breakfast"]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(requestBody);
    const url = `${ServerUrl}/recipes`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    if (response.ok) {
      console.log('Success')
    } else {
      console.log('Error', await response.text())
    }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setRequestBody({ ...requestBody, [name]: value });
  };

  if (!token) {
    return (
      <div className="login-to-submit-container">
        <h1 className>You need to login to submit a recipe</h1>
        <a className="login-to-submit-btn" href="/login">Login</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="signup-input">
      <label>Recipe Name</label>
      <input
        onChange={inputChangeHandler}
        name="title"
        type="text"
        placeholder="Enter recipe name"
      ></input>
      <label>Ingredients</label>
      <input
        onChange={inputChangeHandler}
        name="ingredients"
        type="text"
        placeholder="Enter ingredients"
      ></input>
      <label>Description</label>
      <input
        onChange={inputChangeHandler}
        name="description"
        type="text"
        placeholder="Describe your recipe"
      ></input>
      <button type="submit" className="signup-btn">
        Submit Recipe
      </button>
    </form>
  );
};

export default SubmitRecipeForm;
