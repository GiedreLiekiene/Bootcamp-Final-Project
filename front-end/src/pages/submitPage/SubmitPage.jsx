import "./submitPage.css"
import SubmitRecipeForm from "../../components/submitForm/SubmitRecipeForm";

const SubmitPage = () => {
  return (
    <div className='submit'>
      <div className='submit-wrapper'>
        <div className='submit-main'>
          <h1>Submit Your Recipe</h1>
          <p>Share your amazing recipe with thousands of people across the world. Fill our form to get started.</p>
          <SubmitRecipeForm />
        </div>
      </div>
    </div>
  )
}

export default SubmitPage