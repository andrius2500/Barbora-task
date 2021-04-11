import React from 'react';

import './styles/styles.css';
import DeleteIcon from '@material-ui/icons/Delete';

// TODO: need to change class names

function Cart(props) {
    const { cartItems, show, onRemove, price } = props;
    
    if (cartItems.length !== 0 && show == true) {
        return (
            <div>
                <div className='cart-display__container'>
                    <div className='cart-display__header'>
                        <p className='cart-display__header__name'>Krepšelis</p>
                    </div>
                    {cartItems.map(item => {
                        return (
                            <div key={item.id}>
                            <div className='cart-display__item-info'>
                                <div className='cart-display__item-info__img'>
                                    <img src={item.image} alt='test image' className='img-test'/>
                                </div>
                                <div className='cart-display__item-info__text'>
                                    <p className='cart-display__item-info__paragraph'>{item.text}</p>
                                    <p className='cart-display__item-info__qty'>{item.qty} vnt.</p>
                                </div>
                                <div className='cart-display__item-info__price'>
                                    <DeleteIcon onClick={() => onRemove(item)} className='delete-test'/>
                                    <p className='price-test'>&#8364;{item.price}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    <div className='cart-display__footer'>
                        <div className='cart-display__footer__btn'>
                            <button type='submit' disabled className='btn-test'>Pirkti</button>
                        </div>
                        <div className='cart-display__footer__final-price'>
                            <p className='final-price-text'>Kaina</p>
                            <p className='final-price-test'>&#8364;{price.toFixed(2)}</p>
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