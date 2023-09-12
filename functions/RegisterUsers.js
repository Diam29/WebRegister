import { auth } from '../Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const usersRegister = async (email, passsword) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, passsword)
        console.log(user, 'soy el user de register');
    } catch (error) {
        console.log(error);
    }
}

export default usersRegister;