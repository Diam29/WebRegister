// // import './App.css'
// // import Profile from './Components/Profile/Profile'
// import Home from './Components/Home/Home'
// import Login from "./Components/Login/login"
// import { useEffect, useState } from 'react'
// import { auth } from './Firebase/FirebaseConfig'
// import { onAuthStateChanged } from 'firebase/auth'
// import { Routes, Route } from 'react-router-dom'


// const App = () => {

//   const [user, setUser] = useState(null)

//   // onAuthStateChanged(auth, userFirebase => {
//   //   if (userFirebase) {
//   //     setUser(userFirebase)
//   //     console.log('firebase', userFirebase);
//   //   } else {
//   //     setUser(null)
//   //   }
//   // })

//   // useEffect(() => {
//   //   console.log("User: ", user);
//   //   if (!user) {
//   //     <Login />
//   //   } else {
//   //     <Home />
//   //   }
//   // }, [])

//   return (
//     <div>
//       <Routes>
//         {(!user) ? <Route path='/' element={<Login />} : <Route path='/home' element={<Home />} />
//         {/* <Route path='/' element={user === null ? <Login /> : <Route path='/home' element={<Home />} />} /> */}
//         {/* <Route path='/' element={<Login />} /> */}
//         {/* <Route path='/home' element={<Home />} /> */}
//         {/* <Route path='/' element={<Login />} /> */}
//       </Routes>

//       {/* <Profile /> */}

//     </div>
//   )
// }

// export default App

import './App.css';
import Home from './Components/Home/Home';
import Login from "./Components/Login/login";
import Profile from './Components/Profile/Profile'
import { useEffect, useState } from 'react';
import { auth } from './Firebase/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userFirebase => {
      if (userFirebase) {
        setUser(userFirebase);
        console.log('firebase', userFirebase);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup the subscription when unmounting

  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;

