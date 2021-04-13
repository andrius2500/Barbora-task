import React from 'react';

import './styles/styles.css';
import DeleteIcon from '@material-ui/icons/Delete';

function Cart(props) {
    const { cartItems, show, onRemove, price } = props;
    
    if (cartItems.length !== 0 && show === true) {
        return (
            <div>
                <div className='cart-display__container'>
                    <div className='cart-display__header'>
                        <p className='cart-display__name'>Krepšelis</p>
                    </div>
                    {cartItems.map(item => {
                        return (
                            <div key={item.id}>
                            <div className='cart-display__item-info'>
                                <div className='cart-display__img-wrapper'>
                                    <img src={item.image} alt='grocery' className='cart-display__img'/>
                                </div>
                                <div className='cart-display__text-wrapper'>
                                    <p className='cart-display__paragraph'>{item.text}</p>
                                    <p className='cart-display__qty'>{item.qty} vnt.</p>
                                </div>
                                <div className='cart-display__price-wrapper'>
                                    <DeleteIcon onClick={() => onRemove(item)} className='cart-display__price-delete'/>
                                    <p className='cart-display__price-display'>&#8364;{item.price}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    <div className='cart-display__footer'>
                        <div className='cart-display__btn-wrapper'>
                            <button type='submit' disabled className='cart-display__buy-btn'>Pirkti</button>
                        </div>
                        <div className='cart-display__final-price-wrapper'>
                            <p className='cart-display__final-price-text'>Kaina</p>
                            <p className='cart-display__final-price-display'>&#8364;{price.toFixed(2)}</p>
                        </div>                     
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
            </div>
        );
    }
}

export default Cart;