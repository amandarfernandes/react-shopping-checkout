import React, { Component } from 'react';
import style from './Promo.module.css';
import Aux from '../../Aux';
import PromoForm from './PromoForm';

class Promo extends Component {
    state={
        open:false
    }

    handleClick = () => {
        this.setState((prevState)=>({open:!prevState.open}),()=>{
            console.log(this.state)
        });
    }

    render() {
        const {open} = this.state;
        const promoText = !open? `Apply promo code +`:`Hide Promo Code -`;
        return (
            <Aux>
                <p className={style.PromoMessage} 
                    onClick={this.handleClick}
                >{promoText}</p>
                {open?<PromoForm />:null}
            </Aux>
        )
    }
}
export default Promo;