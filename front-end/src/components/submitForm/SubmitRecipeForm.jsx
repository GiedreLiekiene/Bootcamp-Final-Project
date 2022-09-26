import { useState } from "react";
import { ServerUrl } from "../../config";
import "./submitRecipeForm.css";

const SubmitRecipeForm = ({
}) => {
  // TODO : 
  // * send sections in this form - needs UI with checkboxes 
  // TODO :
  // * send user photo in signup form
  let loginInformation = JSON.parse(localStorage.getItem("loginInformation")) || {};
  console.log(loginInformation)
  let token = loginInformation.token;
  let userId = loginInformation._id;

  const [requestBody, setRequestBody] = useState({
    userId: userId,
    sections: [""]
  });

  const uploadImage = async (imageFile) => {
    const url = `${ServerUrl}/upload`;

    //console.log(imageFile, imageFile.name, typeof(imageFile))

    let data = new FormData()
    data.append('image', imageFile, imageFile.name)

    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Authorization": `Bearer ${token}`
      },
    });
    if (response.ok) {
      let responseBody = await response.json();
      console.log('Success', responseBody)       
      return responseBody.url;
    } else {
      let error = await response.text();
      console.log('Error', error)
      throw `Failed to upload image: ${error}`;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    console.log(requestBody);

    let { imageFile, ...body } = requestBody;

    body.imageUrl = await uploadImage(imageFile);

    const url = `${ServerUrl}/recipes`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    
    if (response.ok) {
      let form = e.target;
      Array.from(form.elements).forEach(element => {
        element.value = "";
      });
      console.log('Success')
    } else {
      console.log('Error', await response.text())
    }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setRequestBody({ ...requestBody, [name]: value });
  };

  const imageChangeHandler = (event) => {
    const { name, files } = event.target;
    setRequestBody({ ...requestBody, [name]: files[0] });
  };

  if (!token) {
    return (
      <div className="login-to-submit-container">
        <h1 className>You need to login to submit a recipe</h1>
        <a className="login-to-submit-btn" href="/login">Login</a>
      </div>
    )
  } else {

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
      <label>Image</label>
      <input
        onChange={imageChangeHandler}
        name="imageFile"
        type="file"        
      ></input>
      <button type="submit" className="signup-btn">
        Submit Recipe
      </button>
    </form>
  );
};

export default SubmitRecipeForm;
