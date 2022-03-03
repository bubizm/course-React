import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Chat } from '../Chat';
import { Chatlist } from '../ChatsList';
import { Profile } from '../Profile';

import './style.css';

const Home = () => <h2>Home page</h2>;

// const initialChats = [
//   {
//     name: 'chat1',
//     id: 1,
//   },
//   {
//     name: 'chat2',
//     id: 2,
//   },
//   {
//     name: 'chat3',
//     id: 3,
//   },
// ];

// const initialMessages = initialChats.reduce((acc, el) => {
//   acc[el.id] = [];
//   return acc;
// }, {});

export const Router = () => {
  // const [chatList, setChatList] = useState(initialChats);
  // const [messages, setMessages] = useState(initialMessages);

  // const messages = useSelector(selectMessages);

  // const dispatch = useDispatch();

  // const handleAddMessage = (chatId, newMsg) => {
  //   // setMessages((prevMessages) => ({
  //   //   ...prevMessages,
  //   //   [chatId]: [...prevMessages[chatId], newMsg],
  //   // }));
  //   dispatch(addMessage(chatId, newMsg));
  // };

  // const handleDeleteMessage = (chatId, msgId) => {
  //   dispatch(deleteMessage(chatId, msgId));
  // };

  return (
    <BrowserRouter>
      <div className='rout'>
        <div>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'lightgreen' : 'yellow',
            })}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/chats'
            style={({ isActive }) => ({
              color: isActive ? 'lightgreen' : 'yellow',
            })}
          >
            Chats
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/profile'
            style={({ isActive }) => ({
              color: isActive ? 'lightgreen' : 'yellow',
            })}
          >
            Profile
          </NavLink>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='chats' element={<Chatlist />}>
            <Route
              path='chat:chatId'
              element={
                <Chat
                // messages={messages}
                // addMessage={handleAddMessage}
                // deleteMessage={handleDeleteMessage}
                />
              }
            />
          </Route>
          <Route path='*' element={<h2>404 not found</h2>} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
