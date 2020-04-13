
import { combineReducers } from "redux";
import userReducer from '../redux/user/user.reducer';
import CartReducer from '../redux/cart/cart.reducer';
import DirectoryReducer from './directory/directory.reducer';
import ShopReducer from './shop/shop.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
});

export default persistReducer(persistConfig, rootReducer)