import axios from '../../axios-cart';

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const FETCH_CART_FAILED = 'FETCH_CART_FAILED';
export const UPDATE_PRICES = 'UPDATE_PRICES';

export const FETCH_PROMOS = 'FETCH_PROMOS';
export const SET_PROMOTIONS = 'SET_PROMOTIONS';
export const FETCH_PROMOS_FAILED = 'FETCH_PROMOS_FAILED';
export const SET_PROMOTION = 'SET_PROMOTION';

export const setCartItems = (cart) => {
   
    const cartItems = Object.keys(cart).map(key => ({
        id:key,
        ...cart[key]
      }));
      const subTotal = cartItems.reduce((a,c)=>(a+c.price),0).toFixed(2); 
      const taxes = 4.5/100 * subTotal;
      const estimatedTotal = subTotal+taxes;
    return {
        type: SET_CART_ITEMS,
        billItems: {
        cartItems,
        subTotal,
        taxes,
        estimatedTotal
        }
    }
}
export const fetchCartFailed = (error) =>{
    return {
        type: FETCH_CART_FAILED,
        error
    }
}


export const fetchCartItems = () => {
    return async dispatch =>{
        try {
            const response = await axios.get('/cart.json');
            dispatch(setCartItems(response.data));
        } catch (error) {
            dispatch(fetchCartFailed(error));
        }
        
    }
    
}

export const setPromotions = (promos)=> {
    const promotions = Object.keys(promos).map(promo => ({ 
        id: promo,
        ...promos[promo]
    }));
   // console.log('set proomotions',promotions)
    return ({
       type:SET_PROMOTIONS,
       promotions
    })
}

export const fetchPromotionsFailed = error => ({
        type:FETCH_PROMOS_FAILED,
        error
})
export const fetchPromos = () => {
    return async dispatch => {
        try {
            const response =  await axios.get('promotions.json');   
            //console.log('got response',response.data)         
            dispatch(setPromotions(response.data));
        }
        catch(error) {
            dispatch(fetchPromotionsFailed(error));
        }

    }
}

export const applyPromo = (savings,estimatedTotal) => ({
  type:  UPDATE_PRICES,
  billItems: {
      savings,
      estimatedTotal
  }
})


export const setPromotion = promo => ({
    type:SET_PROMOTION,
    promo
})
/*


const response =  await axios.get('promotions.json');
        const promos = response.data;
        const promotions = Object.keys(promos).map(promo => ({ 
            id: promo,
            ...promos[promo]
        }));


    let {billItems} = this.state;
    const subTotal = cartItems.reduce((a,c)=>(a+c.price),0).toFixed(2);
    const temp = billItems.filter((billItem)=>(billItem.label!=="Subtotal"));
    billItems = [{label:"Subtotal", amount:+subTotal}, ...temp]  
    
    this.setState({cartItems,billItems},()=>{
        this.calculateTotal();
    })
*/