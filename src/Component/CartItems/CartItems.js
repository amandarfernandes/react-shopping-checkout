import React, { Component } from 'react';
import Aux from '../../Aux';
import Item from '../CartItems/Item';
import style from './CartItems.module.css';

class CartItems extends Component {
    state = {
        open:false
    }

    handleClick = () => {
        this.setState((prevState)=>({open:!prevState.open}),()=>{
            console.log(this.state)
        });
    }

    render() {
        const {open} = this.state;
        const {items} = this.props;
        const cartMessage = !open? `See Item Details +`: `Hide Item Details -`;
        const cartItems = open ? (
            items.map(item=>(<Item key={item.id} {...item} />))
        ):null;
        return (
            <Aux>
                <p className={style.CartMessage} 
                    onClick={this.handleClick}
                >{cartMessage}</p>
                {open? (
                <div className={style.Cart}>
                {cartItems}
                </div>
                ):null}
            </Aux>
        );
    }
}

export default CartItems;