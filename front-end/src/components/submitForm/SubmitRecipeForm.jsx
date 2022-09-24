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

export default SubmitRecipeForm;
