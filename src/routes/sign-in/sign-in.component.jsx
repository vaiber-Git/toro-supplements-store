import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const googleLogIn = async () => {
        //const response = await signInWithGooglePopup();
        //Destructuring the response
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        console.log(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={googleLogIn}>Google Log In</button>
        </div>
    )
}

export default SignIn;