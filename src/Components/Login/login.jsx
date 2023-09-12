// import React, { useState } from 'react'
// // import { Auth } from '../../Firebase/FirebaseConfig'
// import LoginUsers from '../../Users/LoginUsers'
// import RegisterUsers from '../../Users/RegisterUsers'

// const Login = () => {

//     const [isLoggingIn, setIsLoggingIn] = useState(false)

//     // const [username, setUsername] = useState('')
//     // const [password, setPassword] = useState('')

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const username = e.target.username.value;
//         const password = e.target.password.value;
//         console.log('resultados', username, password);

//         if (isLoggingIn) {
//             await LoginUsers(username, password)
//         } else {
//             await RegisterUsers(username, password)
//         }
//     }
//     // console.log(`envio de form ${username}, ${password}`);
//     return (
//         <div>
//             <h1>{isLoggingIn ? 'Login' : 'Register'}</h1>
//             <form onSubmit={handleSubmit}>

//                 <label htmlFor="Username">Username</label>
//                 <input type="text" id='username' autoComplete='username' />

//                 <label htmlFor="Password">Password</label>
//                 <input type="password" id='password' autoComplete='current-password' />


//                 <button type='submit'>{isLoggingIn ? 'Enter' : 'Register'}</button>
//             </form>
//         </div>
//     )
// }

// export default Login


// // onChange={(e) => setUsername(e.target.value)}
// // onChange={(e) => setPassword(e.target.value)}

import React, { useState } from 'react';
import LoginWithEmailPassword from '../../functions/LoginWithEmailPassword';
import LoginWithGoogle from '../../functions/LoginWithGoogle'
import RegisterUsers from '../../functions/RegisterUsers';
import './login.css'

const Login = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('resultados', email, password);
        if (email && password) {
            setIsLoggingIn(!isLoggingIn)
        }
        if (isLoggingIn) {
            await LoginWithEmailPassword(email, password);
        } else {
            await RegisterUsers(email, password);
        }
    }
    console.log('login', isLoggingIn);

    return (
        <div className="container">
            <h1>{isLoggingIn ? 'Login' : 'Register'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label-container' htmlFor="Email">Email</label>
                    <input className="input-container" type="email" id='email' autoComplete='email' required />
                </div>
                <div>
                    <label className='label-container' htmlFor="Password">Password</label>
                    <input className="input-container" type="password" id='password' autoComplete='current-password' required />
                </div>

                <button type='submit'>{isLoggingIn ? 'Enter' : 'Register'}</button>

            </form>
            <button onClick={LoginWithGoogle}>Accede con Google</button>
            <button className='underline' onClick={() => setIsLoggingIn(!isLoggingIn)}>
                {isLoggingIn
                    ? 'No tienes cuenta? Crea una'
                    : 'Ya tienes cuenta? Accede'}
            </button>
        </div>
    );
}

export default Login;


// <div class="form-floating mb-3">
//   <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
//   <label for="floatingInput">Email address</label>
// </div>
// <div class="form-floating">
//   <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
//   <label for="floatingPassword">Password</label>
// </div>