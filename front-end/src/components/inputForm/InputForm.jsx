import "./inputForm.css";
import { ServerUrl } from "../../config";
import { useState } from "react";

const InputForm = ({
  fullName,
  email,
  password,
  avatarUrl,
  buttonText,
  isSignUp,
}) => {
  const [requestBody, setRequestBody] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(requestBody);
    const url = isSignUp ? `${ServerUrl}/auth/register` : `${ServerUrl}/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(requestBody), 
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.ok) {
     let result = await response.json()
     localStorage.setItem("loginInformation", JSON.stringify(result));
      console.log('Success')
      let form = e.target;
      Array.from(form.elements).forEach(element => {
        element.value = "";
      });
    } else { 
      const errorObj = await response.json();
      setBackendError(errorObj.message)
      console.log('Error', await response.text())
    }
      
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setRequestBody({ ...requestBody, [name]: value });
    switch(event.target.name) {
      case "fullName" : 
        if(value.length < 3) {
          setErrors({...errors, ["fullName"] : "Full Name must be at least 3 characters long"})
        } else {
          setErrors({...errors, ["fullName"] : null})
        }
        break;
      case "email" : 
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          setErrors({...errors, ["email"] : "Please enter a valid email"})
        } else {
          setErrors({...errors, ["email"] : null})
        }
        break;
      case "password" : 
        if(value.length < 5) {
          setErrors({...errors, ["password"] : "Full Name must be at least 5 characters long"})
        } else {
          setErrors({...errors, ["password"] : null})
        }
        break;
    } console.log(errors)
  };

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState();
  
  return (
    <form onSubmit={handleSubmit} className="signup-input">
      {isSignUp && (
        <>
          <label>{fullName}</label>
          <input            
            onChange={inputChangeHandler}
            className={errors.fullName ? "input-error": null}
            name="fullName"
            type="text"
            placeholder="Enter your Full Name"        
          ></input>
          { errors.fullName && <span className="errorMessage">{errors.fullName}</span>}
          <label>{avatarUrl}</label>
          <input className="input-avatar"
            onChange={inputChangeHandler}
            name="avatarURL"
            type="file"
            placeholder="Optional"
          ></input>
        </>
      )}
      <label>{email}</label>
      <input
        onChange={inputChangeHandler}
        name="email"
        type="email"
        placeholder="Enter your email"
        className={errors.email && "input-error"}
      ></input>
      { errors.email && <span className="errorMessage">{errors.email}</span>}
      <label>{password}</label>
      <input
        onChange={inputChangeHandler}
        name="password"
        type="password"
        placeholder="Enter your password"      
        className={errors.password && "input-error"}  
      ></input>
      { errors.password && <span className="errorMessage">{errors.password}</span>}
      { backendError && <span className="errorMessage">{backendError}</span>}
      <button type="submit" className="signup-btn">
        {buttonText}
      </button>
      
    </form>
  );
};

export default InputForm;