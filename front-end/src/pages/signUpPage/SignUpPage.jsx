import './signUpPage.css'

const SignUpPage = () => {
  return (
    <div className='signup'>
      <div className='signup-wrapper'>
        <div className='signup-main'>
          <h1>We Need Some Information</h1>
          <div className='signup-input'>
            <label>Username</label>
            <input type="text" placeholder='Enter your username'></input>
            <label>Email</label>
            <input type="text" placeholder='Enter your email'></input>
            <label>Password</label>
            <input type="password" placeholder='Enter your password'></input>
            <label>Avatar URL</label>
            <input type="text" placeholder='Optional'></input>
            <button className='signup-btn'>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage