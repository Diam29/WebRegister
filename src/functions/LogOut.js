import { auth } from '../Firebase/FirebaseConfig'
import { signOut } from 'firebase/auth'

const logoutUsers = async () => {
    try {
        await signOut(auth).then(() => {
            console.log('user logged out')
        })
    } catch (error) {
        console.log('soy el error de logout', error.message);
    }
}

export default logoutUsers;