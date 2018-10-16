import React from 'react';
import style from './CartItems.module.css';

const Item = ({name,image,price,description}) =>{
    return (
        <div className={style.CartItem}>
            <img src={image} alt={name}/>
            <div className={style.Detail}>
            <h4>{name}</h4>
            <p>{description}</p>
            <p className={style.Highlight}>${parseFloat(price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Item;