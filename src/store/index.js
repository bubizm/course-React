import { profileReducer } from "./profile/reducer";
import { createStore } from 'redux';

export const store = createStore(profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );