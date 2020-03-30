import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../costum-button/costum-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firbase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("password dont match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           })
        
        } catch (error) {
            console.error(error)
            
        }

    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
      
        return(
            <div className='sign-up'>
                <h2 className='title'>i do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    
                </form>
            </div>
        )
        
    }
}

export default SignUp;