import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import promotionReducer from './promotionReducer';

export default combineReducers({
 cart:cartReducer,
 promo: promotionReducer
});
