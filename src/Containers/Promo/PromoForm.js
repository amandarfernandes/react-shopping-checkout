import React, { Component } from 'react';
import {connect} from 'react-redux';
import style from './Promo.module.css';
import {fetchPromos, setPromotion} from '../../store/actions/actions';

class PromoForm extends Component {
   state={
        promocode:""
    }

    componentDidMount = () => {
        this.props.onFetchPromos();
    }

    handleSubmit = (e)=> {
            e.preventDefault();
            const {promocode} = this.state;
            const {promos} = this.props;
            const promotion = promos.filter(promo=>promo.id.toLowerCase()===promocode.toLowerCase())
            if (promotion.length > 0) {
                let promo = promotion[0];
                console.log(promo)
                let num = promo.percentage;
                this.props.onSetPromotion(promo.id)
                this.props.applyPromo(num/100)
            } else {
                
            }
            this.setState({
                promocode:""
            })
            
    }
    render() {
        //console.log('from reducer',this.props.promos)
        const form = this.props.promos? (
        <input type="text" value={this.state.promocode}
        placeholder="Enter your promocode"
    onChange={(e)=>{this.setState({promocode:e.target.value})}}
    />):null;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={style.Promo}>
                {form}
                <button disabled={!this.state.promocode.trim()} type="submit">Apply</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    promos: state.promo.promotions
});

const mapDispatchToProps = dispatch => ({
    onFetchPromos : ()=>dispatch(fetchPromos()),
    onSetPromotion: promotion => dispatch(setPromotion(promotion))
})
export default connect(mapStateToProps,mapDispatchToProps)(PromoForm);