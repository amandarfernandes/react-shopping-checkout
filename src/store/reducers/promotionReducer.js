import { SET_PROMOTIONS, SET_PROMOTION } from '../actions/actions';

const initialState = {
    promotions:null,
    promo:"",
    error:false
}

const promotionReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_PROMOTIONS: 
          return {
              ...state,
              promotions: [...action.promotions],
              error:false
          }
          case SET_PROMOTION: 
          return {
              ...state,
              promo:action.promo,
              error:false
          }  
        default: return state;
    }
    
}

export default promotionReducer;