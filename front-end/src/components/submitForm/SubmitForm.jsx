import "./submitForm.css";

const SubmitForm = ({
  email,
  recipeName,
  ingredients,
  description,
  buttonText,
}) => {
  return (
    <div className="submit-input">
      <label>{email}</label>
      <input type="text" placeholder="Enter your email"></input>
      <label>{recipeName}</label>
      <input type="text" placeholder="Enter recipe name"></input>
      <label>{ingredients}</label>
      <input type="text" placeholder="Describe ingredients"></input>
      <label>{description}</label>
      <input type="text" placeholder="Describe your recipe"></input>
      <button className="submit-btn">{buttonText}</button>
    </div>
  );
};

export default SubmitForm;
