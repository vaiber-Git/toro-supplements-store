import {Fragment, useContext} from 'react';

import {default as Logo} from '../../assets/logo.png';

import {UserContext} from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { CartDropdownStateContext } from '../../context/cart-dropdown.context'

import { Link } from "react-router-dom"

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './nav-bar.styles.scss'

const NavBar = () => {

    const { currentUser } = useContext(UserContext);
    const {currentState} = useContext(CartDropdownStateContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img src={Logo} className="logo" />
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        <h4>SHOP</h4>
                    </Link>

                    {
                        currentUser ? (
                            <Link className='nav-link' onClick={signOutUser}> 
                                <h4>SIGN OUT</h4>
                            </Link>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                <h4>SIGN IN</h4>
                            </Link>

                        )
                    }
                    <CartIcon />
                    
                </div>
                    {
                        currentState && <CartDropdown />   
                    }
            </div>
        </Fragment>
    )
}

export default NavBar