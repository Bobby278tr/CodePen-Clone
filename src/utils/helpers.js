import { signInWithRedirect, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"
import { auth } from '../config/firebase.config'

const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

export const signInWithGoogle = async () => {
    await signInWithRedirect(auth, googleProvider).then((userCred) => {
        window.location.reload();
    })

}

export const signInWithGitHub = async () => {
    await signInWithRedirect(auth, gitHubProvider).then((userCred) => {
        window.location.reload();
    })

}