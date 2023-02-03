import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { getProductsReducer,getProductDetailsReducer } from "./reducers/productReducer";

//combining all the reducers which can then be passed to store 
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails : getProductDetailsReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store; 