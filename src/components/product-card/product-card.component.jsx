import { useContext } from 'react';
import './product-card.styles.scss';

import Button from '../button/button.component';

import { CartDropdownStateContext } from '../../context/cart-dropdown.context';

const ProductCard = ( {product} ) => {
    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartDropdownStateContext);

    const addProductToCart = () => {
        addItemToCart(product);
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'> {name} </span>
                <span className='price'> ₹{price}  </span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;