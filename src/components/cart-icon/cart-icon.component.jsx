import './cart-icon.styles.scss';
//import CartIconLogo from '../../components/cart-icon-logo/cart-icon-logo.component';
import {default as CartIconLogo} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartDropdownStateContext } from '../../context/cart-dropdown.context';

const CartIcon = () => {

    const {currentState, setCurrentState} = useContext(CartDropdownStateContext);

    const toggleCartDropdown = () => setCurrentState(!currentState);

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            {/* <CartIconLogo className='shopping-bag-icon'/> */}
            <img src={CartIconLogo} className='shopping-bag-icon'/>
            <span className='item-count'>10</span>
        </div>
        

    )
}

export default CartIcon;