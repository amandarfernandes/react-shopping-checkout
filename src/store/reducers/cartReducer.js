import { SET_CART_ITEMS, FETCH_CART_FAILED,UPDATE_PRICES } from '../actions/actions';

const initialState = {
    cartItems: [],
    subTotal: 0,
    savings:0,
    taxes: 0 ,
    estimatedTotal:0,
    error:null
}
const cartReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_CART_ITEMS :
            console.log(action.cartItems)
            return {
                ...state,
                ...action.billItems,
                error:null
            }
        case FETCH_CART_FAILED :
            return {
                ...state,
                error:action.error
            }    
            case UPDATE_PRICES:
            return {
                ...state,
                error:null,
                ...action.billItems
            }
        default: return state;
    }
}

export default cartReducer;
