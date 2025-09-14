import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up-form.styles.scss'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : '',
};


const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {

        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password === confirmPassword) {

            try {

                const { user } = await createAuthUserWithEmailAndPassword(email,password);

                await createUserDocumentFromAuth(user, {displayName});

                resetFormFields();

            } catch (error) {
                
                if(error.code === 'auth/email-already-in-use') {
                    alert("User/Email Already Exists");
                } 

                if(error.code === 'auth/invalid-email') {
                    alert("Invalid Email");
                } 

                else { console.log("Error Message", error); }
            }
            
            //console.log(response);
            
        }

        else {alert("wrong pass");}
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value});

    };

    return (
        <div className="sign-up-container">
            <h2>Not Registered Yet ?</h2>
            <span>Sign Up using your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label = 'Full Name'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value = {displayName}

                />

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

                <FormInput 
                    label = 'Confirm Password'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value = {confirmPassword}

                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;