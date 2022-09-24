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
      {isSignUp && (
        <>
          <label>{fullName}</label>
          <input
            onChange={inputChangeHandler}
            name="fullName"
            type="text"
            placeholder="Enter your Full Name"
          ></input>
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
        name="email"
        type="text"
        placeholder="Enter your email"
      ></input>
      <label>{password}</label>
      <input
        onChange={inputChangeHandler}
        name="password"
        type="password"
        placeholder="Enter your password"
      ></input>
      <button type="submit" className="signup-btn">
        {buttonText}
      </button>
    </form>
  );
};

export default InputForm;
