import React from 'react';
import './cart_dropdown.styles.scss';
import CostumButton from '../costum-button/costum-button.component';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CostumButton>GO TO CHECK OUT</CostumButton>
    </div>
)

export default CartDropdown;