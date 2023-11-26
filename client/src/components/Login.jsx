
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();

    }

  return (
    <div className="container">  
        <h2>Este es el componente de Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="sm:col-span-4 col-7">
                <label htmlFor='email' className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                <input  name="email" type='email' id='email' placeholder='Enter email' className='form-control'
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="sm:col-span-4 col-7">
                <label htmlFor='password' className="block text-sm font-medium leading-6 text-gray-900">Passwordr</label>
                <input  name="password" type='password' id='password' placeholder='Enter password' className='form-control'
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className='btn border-t-cyan-500 bg-slate-400'>Sign In</button>
        </form>   
    </div>
  )
}

export default Login
