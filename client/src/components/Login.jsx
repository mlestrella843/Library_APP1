
import React from 'react'

const Login = () => {
  return (
    <div className="container">  
        <h2>Este es el componente de Login</h2>
        <form>
            <div className="sm:col-span-4 col-7">
                <label htmlFor='email' className="block text-sm font-medium leading-6 text-gray-900">User</label>
                <input value='email' name="email" type='email' id='email' className='form-control'/>
            </div>
            <div className="sm:col-span-4 col-7">
                <label htmlFor='password' className="block text-sm font-medium leading-6 text-gray-900">Passwordr</label>
                <input value='password' name="password" type='password' id='password' className='form-control'/>
            </div>
            <button type="submit">Sign In</button>
        </form>   
    </div>
  )
}

export default Login
