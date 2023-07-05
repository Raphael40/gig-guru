import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch( '/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password, username: username })
    })
    .then(response => {
      if(response.status === 201) {
        console.log('user signed up')
      } else {
        console.log('error')
      }
    })
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div className="signUpContainer">
       <form onSubmit={handleSubmit}>
            <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
            <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} />
            <input placeholder="Username" id="username" type='text' value={ username } onChange={handleUsernameChange} />
          <input id='submit' type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default SignupForm;