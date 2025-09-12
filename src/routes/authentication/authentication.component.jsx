import './authentication.styles.scss'
import SignUp from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in-form/sign-in-form.component';


const Auth = () => {

    return (
        <div className="authentication-container">
            <SignIn />  
            <SignUp />
        </div>
    )
}

export default Auth;