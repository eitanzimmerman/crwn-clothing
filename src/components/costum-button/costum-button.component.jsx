import React from 'react';
import './costum-button.styles.scss';

const CostumButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className= {`${inverted ? 'inverted' : '' }
     ${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} 
     {...otherProps}>
        {children}
    </button>
)

export default CostumButton;