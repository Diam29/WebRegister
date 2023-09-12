import { auth } from '../Firebase/FirebaseConfig'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'

const LoginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider()
        // const result = await signInWithPopup(auth, provider)
        await signInWithRedirect(auth, provider)
        console.log(provider, 'provider');
    } catch (error) {
        console.log(error);
    }
}

export default LoginWithGoogle;