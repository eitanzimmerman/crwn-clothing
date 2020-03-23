import React from 'react';
import './costum-button.styles.scss';

const CostumButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn? 'google-sign-in' : '' } custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CostumButton;