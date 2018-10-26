import React from 'react';
import style from './CartItems.module.css';

const Item = ({name,image,price,description}) =>{
    return (
        <div className={style.CartItem}>
            <img src={image} alt={name}/>
            <div className={style.Detail}>
            <h4>{name}</h4>
            <p>{description}</p>
            </div>
            <p className={style.Price}>${parseFloat(price).toFixed(2)}</p>
        </div>
    )
}

export default Item;