import {Fragment, useContext} from 'react'
import Logo from '../../components/logo/logo.component'

//import {default as Logo} from '../../assets/toro.svg';

import {UserContext} from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { CartDropdownStateContext } from '../../context/cart-dropdown.context'

import { Outlet, Link } from "react-router-dom"

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss'

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const {currentState} = useContext(CartDropdownStateContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                    {/* Work on it <img src={Logo} className="logo" /> */}
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>

                    {
                        currentUser ? (
                            <Link className='nav-link' onClick={signOutUser}> SIGN OUT</Link>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>

                        )
                    }
                    <CartIcon />
                    
                </div>
                    {
                        currentState && <CartDropdown />   
                    }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation