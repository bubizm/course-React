import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Chat } from '../Chat';
import { Chatlist } from '../ChatsList';
import { Profile } from '../Profile';

import './style.css';

const Home = () => <h2>Home page</h2>

export const Router = () => {
    return (
        
    <BrowserRouter>
    <div className='rout'>
        <div>
            <NavLink to='/'
            style={({ isActive }) => ({ color: isActive 
                ? 'lightgreen' 
                : 'yellow'})}
            >Home</NavLink>
        </div>
        <div>
            <NavLink to='/chats'
            style={({ isActive }) => ({ color: isActive 
                ? 'lightgreen' 
                : 'yellow'})}>Chats</NavLink>
        </div>
        <div>
            <NavLink to='/profile'
            style={({ isActive }) => ({ color: isActive 
                ? 'lightgreen' 
                : 'yellow'})}>Profile</NavLink>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='chats' element={<Chatlist />}>
                <Route path=':chatId' element={<Chat />} />
            </Route>
            <Route path='*' element={<h2>404 not found</h2>} />
            <Route path='profile' element={<Profile />}/>
        </Routes>
        </div>
    </BrowserRouter>
    );
};