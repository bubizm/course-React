import { addChat, add_chat, delete_chat } from '../actions';
import { chatsReducer } from '../reducer';

describe('chatsReducer test', () => {
  it('returns array chats with name and id', () => {
    const state = [];
    const action = {
      type: add_chat,
      payload: {
        name: 'chat1',
        id: 1,
      },
    };

    expect(chatsReducer(state, action)).toEqual([
      ...state,
      { name: action.payload.name, id: action.payload.id },
    ]);
  });

  it('delete chat in chatlist', () => {
    function filterByTerm(inputArr, searchTerm) {
      return inputArr.filter(({ id }) => id !== searchTerm);
    }

    const state = [
      { id: 1, name: 'chat1' },
      { id: 2, name: 'chat2' },
    ];
    const action = {
      type: delete_chat,
      payload: { id: 1 },
    };

    expect(filterByTerm(state, action.payload.id)).toEqual([
      state[action.payload.id],
    ]);
  });
});
