import './cart-icon.styles.scss';
import {default as CartIconLogo} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartDropdownStateContext } from '../../context/cart-dropdown.context';

const CartIcon = () => {

    const {currentState, setCurrentState, cartItemsCount} = useContext(CartDropdownStateContext);

    const toggleCartDropdown = () => setCurrentState(!currentState);

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            <img src={CartIconLogo} className='shopping-bag-icon'/>
            <span className='item-count'>{cartItemsCount}</span>
        </div>
        

    )
}

export default CartIcon;