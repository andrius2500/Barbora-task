
import React from "react";

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './styles/styles.css';


function Header(props) {
    const { count, show, price } = props;

    return (
        <div className='header__container'>
            <div className='header__logo'>
                <img src='https://aromama.lt/img/cms/Draugai/thumbnail%20(1).png' alt='logo' className='header__logo__img'/>
            </div>
            <div className='header__cart'>
                <button className='header__cart__btn' onClick={() => show()}> 
                    <Badge color="secondary" badgeContent={count.length} className='header__cart__img'>
                        <ShoppingCartIcon />{" "}
                    </Badge>
                    <span className='header__cart__price'>&#8364;{price.toFixed(2)}</span>
                </button>
            </div> 
        </div>
    );
}

export default Header;