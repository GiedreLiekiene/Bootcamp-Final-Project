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
    } else {
      console.log('Error', await response.text())
    }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setRequestBody({ ...requestBody, [name]: value });
  };
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  }

  const emailErrorMessage = isSignUp ? "Please enter a valid email address" : "This email is not registered";
  const passwordErrorMessage = isSignUp ? "Password shoud be at least 5 characters long" : "Password is not correct";
  return (
    <form onSubmit={handleSubmit} className="signup-input">
      {isSignUp && (
        <>
          <label>{fullName}</label>
          <input            
            onChange={inputChangeHandler}
            onBlur={handleFocus}
            focused={focused.toString()}
            name="fullName"
            type="text"
            placeholder="Enter your Full Name"
            pattern="(.*[A-Za-z0-9 ]){3}"            
          ></input>
          <span className="errorMessage">Full Name must be at least 3 characters long</span>
          <label>{avatarUrl}</label>
          <input
            onChange={inputChangeHandler}
            name="avatarURL"
            type="text"
            placeholder="Optional"
          ></input>
        </>
      )}
      <label>{email}</label>
      <input
        onChange={inputChangeHandler}
        onBlur={handleFocus}
        focused={focused.toString()}
        name="email"
        type="email"
        placeholder="Enter your email"
      ></input>
      <span className="errorMessage">{emailErrorMessage}</span>
      <label>{password}</label>
      <input
        onChange={inputChangeHandler}
        onBlur={handleFocus}
        focused={focused.toString()}
        name="password"
        type="password"
        placeholder="Enter your password"
        pattern="(.*[A-Za-z0-9]){5}"
        onFocus={() => setFocused(true)}
      ></input>
      <span className="errorMessage">{passwordErrorMessage}</span>
      <button type="submit" className="signup-btn">
        {buttonText}
      </button>
    </form>
  );
};

export default InputForm;
