import React from 'react';
import Item from './Item';
import style from './CartItems.module.css';

const Cart = ({items}) => {
    const cartItems = items.map(item=>(
                        <Item key={item.id} {...item} />)
                     );
    return (
    <div className={style.Cart}>
        {cartItems}
    </div>
    );
}

export default Cart;