import "./inputForm.css";

const InputForm = ({
  fullName,
  email,
  passwordHash,
  avatarUrl,
  buttonText,
  isSignUp,
}) => {
  return (
    <div className="signup-input">
      <label>{fullName}</label>
      <input type="text" placeholder="Enter your username"></input>
      <label>{passwordHash}</label>
      <input type="password" placeholder="Enter your password"></input>
      {isSignUp && (
        <>
          {" "}
          <label>{email}</label>
          <input type="text" placeholder="Enter your email"></input>
          <label>{avatarUrl}</label>
          <input type="text" placeholder="Optional"></input>
        </>
      )}
      <button className="signup-btn">{buttonText}</button>
    </div>
  );
};

export default InputForm;
