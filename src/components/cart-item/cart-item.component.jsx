import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {

    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='cart-item-details'>
                <h2 className='name'> {name} </h2>
                <span className='quantity'> {quantity} X ₹{price} </span>
            </div>
        </div>
    )
}

export default CartItem;