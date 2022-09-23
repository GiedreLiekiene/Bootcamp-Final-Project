import "./inputForm.css";
// import { ServerUrl } from '../../config';
// import { useState, useEffect } from 'react';

const InputForm = ({
  fullName,
  email,
  passwordHash,
  avatarUrl,
  buttonText,
  isSignUp,
}) => {
  // const[user, setUser] = useState([]);

//   useEffect( () => {
//      fetch (`${ServerUrl}/auth/register`)
//     .then((res) => res.json())
//     .then((json)=> setUser(json.user));
//   }, []);
  
//   const handleChange = (e) => {
//     setUser((prev)=> ({...prev, [e.target.name] : e.target.user}))
// }
//   console.log(user);
// sita buvau ikelus prie kiekvienam inpute onChange={handleChange}
  return (
    <div className="signup-input">
        {isSignUp && (
        <>
          <label>{fullName}</label>
          <input type="text" placeholder="Enter your Full Name"></input>
          <label>{avatarUrl}</label>
          <input  type="text" placeholder="Optional"></input>
        </>
      )}
      <label>{email}</label>
      <input type="text" placeholder="Enter your email"></input>
      <label>{passwordHash}</label>
      <input type="password" placeholder="Enter your password"></input>
      <button className="signup-btn">{buttonText}</button>
    </div>
  );
};

export default InputForm;
