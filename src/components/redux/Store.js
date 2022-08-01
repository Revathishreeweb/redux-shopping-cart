import Reducers from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

const Store = createStore(Reducers,composeWithDevTools());
export default Store;