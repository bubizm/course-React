// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMx30isEYHHDoSlbYx0mZ0XW423wjRtAQ',
  authDomain: 'react-app-gb-d423d.firebaseapp.com',
  projectId: 'react-app-gb-d423d',
  storageBucket: 'react-app-gb-d423d.appspot.com',
  messagingSenderId: '244169199639',
  appId: '1:244169199639:web:2102c84a0f210be658cc52',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);

export const login = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);

export const logout = () => signOut(auth);

export const db = getDatabase(app);

export const profileRef = ref(db, 'profile');
export const profileNameRef = ref(db, 'profile/name');
export const profileShowNameRef = ref(db, 'profile/showName');
export const profileCheckedRef = ref(db, 'profile/checked');

export const chatsRef = ref(db, '/chats');
export const getChatsRefById = (chatId) => ref(db, `/chats/${chatId}`);

export const messagesRef = ref(db, '/messages');
export const getMessageListRefByChatId = (chatId) =>
  ref(db, `/messages/${chatId}/messageList`);
export const getMessagesRefByChatId = (chatId) =>
  ref(db, `/messages/${chatId}`);
export const getMessagesRefById = (chatId, msgId) =>
  ref(db, `/messages/${chatId}/messageList/${msgId}`);
