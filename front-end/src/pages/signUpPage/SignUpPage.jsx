import './signUpPage.css'
import InputForm from '../../components/inputForm/InputForm'

const SignUpPage = () => {
  return (
    <div className='signup'>
      <div className='signup-wrapper'>
        <div className='signup-main'>
          <h1>We Need Some Information</h1>
          <InputForm fullName='Username' email='Email' passwordHash='Password' avatarUrl='Avatar URL' buttonText='Sign Up' isSignUp={true}/>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage