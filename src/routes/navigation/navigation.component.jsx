import {Fragment, useContext} from 'react'
import Logo from '../../components/logo/logo.component'
import {UserContext} from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    //console.log(currentUser);

    const signOutHandler = async () => {

        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>

                    {
                        currentUser ? (
                            <Link className='nav-link' onClick={signOutHandler}> SIGN OUT</Link>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>

                        )
                    }
                    
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation