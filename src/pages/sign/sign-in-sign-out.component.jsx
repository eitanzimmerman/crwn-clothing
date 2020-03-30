import React from 'react';
import './sign-in-sign-out.styles.scss';
import SignIn from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignOut = () =>(
    <div className='sign-in-sign-out'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInSignOut;