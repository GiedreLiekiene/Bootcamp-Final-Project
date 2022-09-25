import './signUpPage.css'
import InputForm from '../../components/inputForm/InputForm'


const SignUpPage = () => {


  return (
    <div className='signup'>
      <div className='signup-wrapper'>
        <div className='signup-main'>
          <h1>We Need Some Information</h1>
          <p>Add your details to be able to upload your recipe! Maybe you are our next Top Chef? </p>
          <InputForm fullName='Full Name' email='Email' password='Password' avatarUrl='Avatar URL' buttonText='Sign Up' isSignUp={true}/>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage