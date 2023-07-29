import { createStore, combineReducers } from "redux";
import PostReducers from "./PostReducers";
import ProfileReducers from './ProfileReducers.js';

let rootReducesr = combineReducers({
    fetchPostData: PostReducers,
    profileData: ProfileReducers,
})

const store = createStore(rootReducesr);
export default store;
// In Redux, the root reducer is a function that combines multiple reducers into a single reducer