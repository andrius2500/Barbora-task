import React from 'react';

import './styles/styles.css';

function ActionButtonContainer(props) {
    const {show, onAdd, onRemove, product, quant} = props;

    if (show === true) {
        return (
            <div className='grocery-dsplay__action-container' >
                <div className='grocery-dsplay__action-quant'>
                    <p className='grocery-dsplay__action-quant__text'>Krepšelyje <span>{quant} vnt.</span></p>
                </div>
                <div className='grocery-display__action-btn'>
                    <button onClick={() => onRemove(product)} className='action-btn action-btn--left'>-</button>
                    <p className='action-qty'>{quant} vnt.</p>
                    <button onClick={() => onAdd(product)} className='action-btn action-btn--right'>+</button>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }

}

export default ActionButtonContainer;