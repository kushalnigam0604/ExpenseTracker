import {combineReducers} from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    storeAmount: amountReducer
})

export default reducers