import { profileReducer } from './profile/reducer';
import { combineReducers, createStore } from 'redux';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
