import React, { useState } from 'react';

import grocery from './list/list.js';
import GroceryList from '../GroceryList/GroceryList.js';
import Header from '../Header/Header.js';
import Cart from '../Cart/Cart.js';

import './styles/styles.css';

function SelectPage() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (product => {
        const exist = cart.find(x => x.id === product.id);
        if (exist) {
            setCart(cart.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x));
        } else {
            setCart([...cart, {...product, qty: 1 }]);
        }
    })

    const removeItem = (product => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCart(cart.filter((x) => x.id !== product.id));
        } else {
            setCart(cart.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1 } : x));
        }
    });
    
    const appearCart = (() => {
        setShowCart(!showCart);
    });

    const groceryItem = grocery.map(item => <GroceryList key={item.id} product={item} onAdd={addToCart}/>);
    
    const fullPrice = cart.reduce((a, b) => a + b.qty * b.price, 0);

    return (
        <div>
            <div className='header'>
                <Header count={cart} show={appearCart} price={fullPrice}/>
            </div>
            <div className='display-container'>
                <div className='grocery-display'>
                    {groceryItem}
                </div>
                <div className='cart-display'>
                    <Cart show={showCart} cartItems={cart} onAdd={addToCart} onRemove={removeItem} price={fullPrice}/>
                </div>
            </div>
        </div>
    );
}

export default SelectPage;