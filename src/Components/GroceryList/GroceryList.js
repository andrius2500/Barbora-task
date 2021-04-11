import React from 'react';

import './styles/styles.css';

function GroceryList(props) {
    const { onAdd, product} = props;
    return (
        <div>
            <div className='grocery-display__container'>
                <div className='grocery-display__info'>
                    <img src={product.image} alt='grocery' className='grocery-display__img'/>
                    <p className='grocery-display__text'>{product.text}</p>
                    <p className='grocery-display__price'>&#8364;{product.price}</p>
                    <button className='grocery-display__btn' onClick={() => onAdd(product)}>Į krepšelį</button>
                </div>
            </div>
        </div>          
    );
}

export default GroceryList;