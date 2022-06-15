import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { Articles } from '../Articles';
import { Chat } from '../Chat';
import { Chatlist } from '../ChatsList';
import { Home } from '../Home/Home';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { Profile } from '../Profile';
import { PublicRoute } from '../PublicRoute/PublicRoute';

import './style.css';
import { auth } from '../../services/firebase';

export const Router = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
      return unsubscribe;
    });
  }, []);

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
        <div>
          <NavLink
            to='/articles'
            style={({ isActive }) => ({
              color: isActive ? 'lightgreen' : 'yellow',
            })}
          >
            Articles
          </NavLink>
        </div>
        <Routes>
          <Route path='' element={<PublicRoute authed={authed} />}>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Home isSignUp />} />
          </Route>
          <Route path='profile' element={<PrivateRoute authed={authed} />}>
            <Route path='' element={<Profile />} />
          </Route>
          <Route path='articles' element={<Articles />} />
          <Route path='chats' element={<PrivateRoute authed={authed} />}>
            <Route path='' element={<Chatlist />}>
              <Route
                path='chat:chatId'
                element={
                  <Chat
                  />
                }
              />
            </Route>
          </Route>
          <Route path='*' element={<h2>404 not found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
