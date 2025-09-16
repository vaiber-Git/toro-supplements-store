import { useContext } from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import { CartDropdownStateContext } from '../../context/cart-dropdown.context';

const CartDropdown = () => {

  const { cartItems } = useContext(CartDropdownStateContext);
  return (
      <div className='cart-dropdown-container'>
      <div className='cart-items'> 
        {/* This array will be different from products, it will have product details + quantity*/}
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button >GO TO CHECKOUT</Button>
      </div>
  )
}

export default CartDropdown;