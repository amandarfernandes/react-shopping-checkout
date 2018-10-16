import React, { Component } from 'react';
import styles from './App.module.css';
import BillDetails from './Component/BillDetails/BillDetails';
import BillItem from './Component/BillDetails/BillItem';
import CartItems from './Component/CartItems/CartItems';
import Promo from './Containers/PromoCode/Promo';
import axios from './axios-cart';

class App extends Component {
  state={
    cartItems :[
      {
        id: "MAC001",
        name: "Modern Arm Anywhere Chair",
        description: "The perfect blend of modern design and functional style",
        image:"https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg",
        price: 102.50
      }, {
        id: "MSC001",
        name: "Comfortable Fabric Sofa Chair",
        description: "The perfect seat to read on a rainy day",
        image:"https://cdn.pixabay.com/photo/2015/12/05/23/45/sofa-1078931_960_720.jpg",
        price: 92.75

      },{
        id: "HWG001",
        name: "Mikasa Wine Glasses - Set of 6 ",
        description: "",
        image:"https://cdn.pixabay.com/photo/2017/09/26/16/44/wine-2789265_960_720.jpg",
        price: 12.00

      }

    ],
    billItems : [
      {
        label:"Subtotal",
        amount:102.50
      },
      {
        label:"Savings",
        amount:5.30
      },
      {
        label:"Est. taxes & fees",
        amount:6.45
      }
    ],
    estimatedTotal:0
  }

  componentDidMount = async  () =>{
    const response = await axios.get('/cart.json');
    
    const cart = response.data;
    console.log(cart)
    var cartItems = Object.keys(cart).map(key => ({
      id:key,
      ...cart[key]
    }));
    console.log(cartItems)
    //.map(key => {    });
    let {billItems} = this.state;
    const subTotal = cartItems.reduce((a,c)=>(a+c.price),0).toFixed(2);
    const temp = billItems.filter((billItem)=>(billItem.label!=="Subtotal"));
    billItems = [{label:"Subtotal", amount:+subTotal}, ...temp]  
    
    this.setState({cartItems,billItems},()=>{
      const estimatedTotal = billItems.reduce((a,c)=> c.label==='Savings'? a-c.amount:a+c.amount,0);
      this.setState({estimatedTotal},()=>{
       
      });  
    })
  }
  render() {
    const {billItems,estimatedTotal,cartItems} = this.state;

    return (
      <div className={styles.CheckoutWrapper}>
        <BillDetails billItems={billItems} />
        <hr />
        <BillItem key={`Total`} label={`Est. Total`} amount={estimatedTotal} />
        {cartItems.length > 0? <CartItems items={cartItems} />: null }
        <hr />       
        <Promo  />
      </div>
    );
  }
}

export default App;
