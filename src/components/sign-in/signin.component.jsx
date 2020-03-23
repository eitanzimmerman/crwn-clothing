import React, {Component} from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CostumButton from '../costum-button/costum-button.component';
import {signInWithGoogle} from '../../firebase/firbase.utils';

class SignIn extends Component {
    constructor(){
        super();
        
        this.state={
            email: '',
            password: ''
        }
    }

    submitFormHandler = (event) =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    onChangeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitFormHandler}>
                    <FormInput 
                    name='email' 
                    type='email'
                    label= 'email' 
                    value={this.state.email} 
                    handleChange={this.onChangeHandler}
                    required/>
                    
                    <FormInput 
                    name='password' 
                    type='password'
                    label='password' 
                    value={this.state.password}
                    handleChange={this.onChangeHandler} 
                    required/>
                    <div className='buttons'>
                        <CostumButton type='submit'>Sign In</CostumButton>
                        <CostumButton isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CostumButton>  
                    </div>
                    
                </form>
            </div>


        )
    }
}

export default SignIn;