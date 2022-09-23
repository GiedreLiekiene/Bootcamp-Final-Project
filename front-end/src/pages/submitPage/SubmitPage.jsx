import "./submitPage.css"
import SubmitForm from "../../components/submitForm/SubmitForm";

const SubmitPage = () => {
  return (
    <div className='submit'>
      <div className='submit-wrapper'>
        <div className='submit-main'>
          <h1>Submit Your Recipe</h1>
          <p>Share your amazing recipe with thousands of people across the world. Fill our form to get started.</p>
          <SubmitForm email='Email' recipeName='Recipe Name' description='Description' ingredients='Ingredients' buttonText='Submit Recipe'/>
        </div>
      </div>
    </div>
  )
}

export default SubmitPage