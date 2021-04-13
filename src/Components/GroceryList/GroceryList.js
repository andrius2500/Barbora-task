import React, { useState } from 'react';
import ActionButtonContainer from '../ActionButtonContainer/ActionButtonContainer.js';

import './styles/styles.css';

function GroceryList(props) {
    const { onAdd, onRemove, product, cartItems} = props;
    const [display, setDisplay] = useState(false);
    const [mainDisplay, setMainDisplay] = useState(true);

    const quant = cartItems.map(item => {
        if (item.id === product.id) {
            return item.qty;
        }
    });
    
    const showActionContainer = () => {
        setDisplay(!display);
    }

    const hideMainButton = () => {
        setMainDisplay(!mainDisplay);
    }

    return (
        <div>
            <div className='grocery-display__container'>
                <div className='grocery-display__info'>
                    <img src={product.image} alt='grocery' className='grocery-display__img'/>
                    <p className='grocery-display__text'>{product.text}</p>
                    <p className='grocery-display__price'>&#8364;{product.price}</p>
                    { mainDisplay ? 
                     <button className='grocery-display__btn' onClick={() => {onAdd(product); showActionContainer(); hideMainButton()}}>Į krepšelį</button> 
                     : null}
                    { display ? 
                    <ActionButtonContainer show={display} onAdd={onAdd} onRemove={onRemove} product={product} quant={quant}/> 
                    : null
                    } 
                </div>
            </div>
        </div>          
    );
}

export default GroceryList;