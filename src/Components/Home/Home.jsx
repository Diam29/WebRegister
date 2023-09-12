import React from 'react'
import { auth } from '../../Firebase/FirebaseConfig'
import LogoutUsers from '../../functions/LogOut'
import './Home.css'
const Home = () => {



    // const handleChange = (e) => {
    //     //console.log('change', e)
    //     setUsername(e.target.value)
    //     setPassword(e.target.value)
    // }

    const handlerLogout = async () => {
        await LogoutUsers()
        console.log('soy home');
    }

    return (
        <div className='container'>
            <h1 className='container_title'>Welcome to the WebRegister</h1>
            <button className='button' onClick={handlerLogout}>Logout</button>
        </div>
    )
}

export default Home


// onChange={setUsername(e.target.value)}
// onChange={setPassword(e.target.value)}
