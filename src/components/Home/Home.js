import { async } from '@firebase/util';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login, signUp } from '../../services/firebase';

export const Home = ({ isSignUp }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPass(event.target.value);
  };

  const handleSignUp = async () => {
    try {
      await signUp(email, pass);
    } catch (event) {
      setError(event.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await login(email, pass);
    } catch (event) {
      setError(event.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }

    setEmail('');
    setPass('');
  };

  return (
    <>
      <h1>{isSignUp ? 'SignUp' : 'Login'}</h1>
      <Link to={`${isSignUp ? '/' : '/signup'}`}>
        {!isSignUp ? 'SignUp' : 'Login'}
      </Link>
      <form onSubmit={handleSubmit}>
        <input type='text' value={email} onChange={handleChangeEmail} />
        <input type='password' value={pass} onChange={handleChangePass} />
        <button>LOGIN</button>
        {error && <span>{error}</span>}
      </form>
    </>
  );
};
