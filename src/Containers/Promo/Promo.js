import React, { Component } from 'react';
import {connect} from 'react-redux';
import style from './Promo.module.css';
import Aux from '../../Aux';
import PromoForm from './PromoForm';

class Promo extends Component {
    state={
        open:false
    }

    handleClick = () => {
        this.setState((prevState)=>({open:!prevState.open}));
    }

    render() {
        const {open} = this.state;
        const promoText = !open? `Apply promo code +`:`Hide Promo Code -`;
        return (
            <Aux>
                <p className={style.PromoMessage} 
                    onClick={this.handleClick}
                >{promoText}</p>
                {open?
                <PromoForm applyPromo={this.props.applyPromo} />:null}
                {this.props.promotion?<p>{this.props.promotion} APPLIED</p>:null}
            </Aux>
        )
    }
}
const mapStateToProps = state => ({
    promotion: state.promo.promo
})
export default connect(mapStateToProps)(Promo);