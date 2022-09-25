import './signUpPage.css'
import InputForm from '../../components/inputForm/InputForm'
import LoginHeader from '../../components/loginHeader/LoginHeader'


const SignUpPage = () => {
  return (
    <div className='signup'>
      <div className='signup-wrapper'>
        <div className='signup-main'>
          <LoginHeader  h1={"We Need Some Information"}  p={"Add your details to be able to upload your recipe! Maybe you are our next Top Chef? "}/>
          <InputForm fullName='Full Name' email='Email' password='Password' avatarUrl='Upload your picture' buttonText='Sign Up' isSignUp={true}/>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage