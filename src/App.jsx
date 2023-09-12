import './App.css';
import Home from './Components/Home/Home';
import Login from "./Components/Login/login";
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
      </Routes>
    </div>
  );
}

export default App;

