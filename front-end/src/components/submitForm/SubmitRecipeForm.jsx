import "./submitRecipeForm.css";

const SubmitRecipeForm = ({}) => {
  return (
    <div className="submit-input">
      <label>Email</label>
      <input type="text" placeholder="Enter your email"></input>
      <label>Recipe Name</label>
      <input type="text" placeholder="Enter recipe name"></input>
      <label>Description</label>
      <input type="text" placeholder="Describe ingredients"></input>
      <label>Ingredients</label>
      <input type="text" placeholder="Describe your recipe"></input>
      <button className="submit-btn">Submit Recipe</button>
    </div>
  );
};

const SubmitRecipeForm2 = ({
}) => {
  const [requestBody, setRequestBody] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(requestBody);
    const url = `${ServerUrl}/auth/register`;
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

export default SubmitRecipeForm;
