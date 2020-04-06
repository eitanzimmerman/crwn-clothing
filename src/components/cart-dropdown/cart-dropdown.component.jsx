import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
 
import './cart_dropdown.styles.scss';


import CartItem from '../cart-item/cart-item.component';
import CostumButton from '../costum-button/costum-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
 
const CartDropdown = ({cartItems , history , dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   
                cartItems.length ? (
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
                )
                :
                (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CostumButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHECK OUT</CostumButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));