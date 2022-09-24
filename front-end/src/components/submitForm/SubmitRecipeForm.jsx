import { useState } from "react";
import { ServerUrl } from "../../config";
import "./submitRecipeForm.css";

const SubmitRecipeForm = ({
}) => {
  // TODO : 
  // * remember token and userId after login (and signup?) - use cookies???
  // * send token&userId in this form
  // * send recipe photo in this form (extra request for upload)
  // * send sections in this form - needs UI with checkboxes
  // * do not allow submit a recipie if you don't have a token - send to logic/singup
  // TODO :
  // * send user photo in signup form

  const [requestBody, setRequestBody] = useState({
    userId: "632f73336d3fe7601c3ee338",
    imageUrl: "/uploads/Baja-Pork-takos.jpeg",
    sections: ["breakfast"]
  });

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJmNzMzMzZkM2ZlNzYwMWMzZWUzMzgiLCJpYXQiOjE2NjQwNTczMzksImV4cCI6MTY2NjY0OTMzOX0.my4hUNg1dI6Up5w-Qw6GvEpeqigzYDM9ijXJIQh3Gfo"
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
