import './checkout.styles.scss';

import { useContext } from 'react';
import { CartDropdownStateContext } from '../../context/cart-dropdown.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems, totalAmount } = useContext(CartDropdownStateContext);

    return (
        <div className='checkout-container'>
            <div className='container-columns'>
                <div className='container-column'>
                    <span>Product</span>
                </div>
                <div className='container-column'>
                    <span>Description</span>
                </div>
                <div className='container-column'>
                    <span>Quantity</span>
                </div>
                <div className='container-column'>
                    <span>Price</span>
                </div>
                <div className='container-column'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <span className='total'>Total : ₹{totalAmount}</span>
        </div>
    )
}

export default Checkout