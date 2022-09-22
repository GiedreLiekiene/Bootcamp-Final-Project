import './login.css'

const LogInPage = () => {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-main'>
          <h1>Welcome Back</h1>
          <div className='login-input'>
            <label>Username</label>
            <input type="text" placeholder='Enter your username'></input>
            <label>Password</label>
            <input type="password" placeholder='Enter your password'></input>
            <button className='login-btn'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogInPage