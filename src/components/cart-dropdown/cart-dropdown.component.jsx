import React from 'react';
import { connect } from 'react-redux';
 
import './cart_dropdown.styles.scss';


import CartItem from '../cart-item/cart-item.component';
import CostumButton from '../costum-button/costum-button.component';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))

            }
        </div>
        <CostumButton>GO TO CHECK OUT</CostumButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);