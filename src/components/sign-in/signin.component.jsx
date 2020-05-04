import React, { useState} from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CostumButton from '../costum-button/costum-button.component';
import {signInWithGoogle, auth} from '../../firebase/firbase.utils';

const SignIn = () => {
        const [userCredentials, setCredentials] = useState({email: '', password: ''})

        const submitFormHandler = async (event) =>{
            event.preventDefault();
            const {email, password} = userCredentials
            
            try {
                await auth.signInWithEmailAndPassword(email,password)
                setCredentials({email:'', password:''})
            } catch (e) {
                console.log(e)
            }
            
        }

        const onChangeHandler = (event) => {
            const {name, value} = event.target;
            setCredentials({...userCredentials, [name]:value})
        }
        const { email, password } = userCredentials
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={submitFormHandler}>
                    <FormInput 
                    name='email' 
                    type='email'
                    label= 'email' 
                    value={email} 
                    handleChange={onChangeHandler}
                    required/>
                    
                    <FormInput 
                    name='password' 
                    type='password'
                    label='password' 
                    value={password}
                    handleChange={onChangeHandler} 
                    required/>
                    <div className='buttons'>
                        <CostumButton type='submit'>Sign In</CostumButton>
                        <CostumButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CostumButton>  
                    </div>
                    
                </form>
            </div>
        )
}
export default SignIn;