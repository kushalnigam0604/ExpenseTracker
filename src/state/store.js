import { applyMiddleware , createStore,compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
export const store = createStore(reducers, enhancer);


store.subscribe(()=>{ console.log(store.getState());})
