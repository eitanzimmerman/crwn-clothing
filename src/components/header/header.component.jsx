import React from 'react';
import {ReactComponent as Logo} from '../../assets/crwn-logo.svg';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {auth} from '../../firebase/firbase.utils'
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';


const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ? 
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = state =>({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
});

        
    


export default connect(mapStateToProps)(Header);