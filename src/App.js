import React, { Component } from 'react';
import { connect } from 'react-redux';


import styles from './App.module.css';
import BillDetails from './Component/BillDetails/BillDetails';
import BillItem from './Component/BillDetails/BillItem';
import Cart from './Component/CartItems/Cart';
import Promo from './Containers/Promo/Promo';

import {fetchCartItems,applyPromo} from './store/actions/actions';


class App extends Component {
  
  componentDidMount = async  () =>{
    this.props.onfetchCartItems();
  }
  
  calculateTotal = () => {
    const {billItems} = this.state;
    const estimatedTotal = billItems.reduce((a,c)=> c.label==='Savings'? a-c.amount:a+c.amount,0);
      this.setState({estimatedTotal});
  }

  applyPromo = value => {
    const {billItems} = this.props;
    console.log('billItems',billItems);
    //const itemSavings = billItems.filter(item=>item.label === 'Savings');
    const itemsTotal = billItems.filter(item=>item.label === 'SubTotal')[0].amount;
    const savings = itemsTotal * value;
    const total = itemsTotal - savings.toPrecision(4);
    this.props.onApplyPromo(savings,total);
  }
  render() {
      const {cartItems,billItems,estimatedTotal} = this.props;
      const cart = cartItems.length > 0? <Cart items={cartItems} />: null ;
      return (
      <div className={styles.CheckoutWrapper}>
        {cart}
        <hr/>       
        <BillDetails billItems={billItems} />
        <hr />
        <BillItem key={`Total`} label={`Est. Total`} amount={estimatedTotal} />
        <Promo applyPromo={this.applyPromo} />
      </div>
    );
  }
}

const mapStateToProps = state =>({
  cartItems: state.cart.cartItems,
  billItems:[
    {
      label:"SubTotal",
      amount: state.cart.subTotal
    },{
      label:"Savings",
      amount: state.cart.savings
    },{
      label:"Taxes",
      amount: state.cart.taxes
    }
  ],
    estimatedTotal: state.cart.estimatedTotal
  
});

const mapDispatchToProps = dispatch =>{
 return {
   onfetchCartItems: ()=> dispatch(fetchCartItems()),
   onApplyPromo : (savings,total)=>dispatch(applyPromo(savings,total))
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
