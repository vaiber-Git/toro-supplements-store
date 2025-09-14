import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss'

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    email : '',
    password : '',
};


const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const resetFormFields = () => {

        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value});

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            const { user } = await signInAuthUserWithEmailAndPassword(email,password);
         
            resetFormFields();

        } catch (error) {
            console.log(error);
        }
    }

    const googleLogIn = async () => {
        //const response = await signInWithGooglePopup();
        //Destructuring the response
        await signInWithGooglePopup();
    };

    return (
        <div className="sign-in-container">
            <h2>Already Registered ?</h2>
            <span>Sign In using your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label = 'E-Mail'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value = {email}

                />

                <FormInput 
                    label = 'Password'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value = {password}

                />
                
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={googleLogIn}>Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;