import { auth } from '../Firebase/FirebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth"
import { createUserWithEmailAndPassword } from 'firebase/auth'




const loginUsers = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log("user de login", user);
        if (!user) {
            const newUser = await createUserWithEmailAndPassword(auth, email, password)
            console.log("newUser", newUser);
            return newUser;
        } else {
            console.log("user", user);
            return user;
        }
    } catch (error) {
        console.log(error);
    }
}

export default loginUsers;