import InputForm from '../../components/inputForm/InputForm'
import LoginHeader from '../../components/loginHeader/LoginHeader'
import './login.css'

const LogInPage = () => {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-main'>
          <LoginHeader h1="Welcome Back" />
          <InputForm email='Email' password='Password' buttonText='Login'/>
        </div>
      </div>
    </div>
  )
}

export default LogInPage