import InputForm from '../../components/inputForm/InputForm'
import './login.css'

const LogInPage = () => {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-main'>
          <h1>Welcome Back</h1>
          <InputForm fullName='Username' email='Email' passwordHash='Password' avatarUrl='Avatar URL' buttonText='Login'/>
        </div>
      </div>
    </div>
  )
}

export default LogInPage