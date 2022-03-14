import { onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  logout,
  profileCheckedRef,
  profileNameRef,
  profileRef,
  profileShowNameRef,
} from '../../services/firebase';
import { store } from '../../store';
import {
  changeName,
  changeShowName,
  change_register,
} from '../../store/profile/actions';
import {
  selectChecked,
  selectName,
  selectShowName,
} from '../../store/profile/selectors';
import { Form } from '../Form';
import './style.css';

export const Profile = () => {
  // const storeState = store.getState();
  // console.log(storeState);
  // Функционал тот же что и ниже, только это для редакса,
  // а внизу для реакт-редакса

  const dispatch = useDispatch();
  //   const data = useSelector((state) => state);
  // const showName = useSelector(selectShowName, shallowEqual);
  // const name = useSelector(selectName, shallowEqual);
  // const checked = useSelector(selectChecked, shallowEqual);

  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChangeShowName = () => {
    // dispatch(changeShowName);
    set(profileShowNameRef, !showName);
  };

  const handleChangeName = (text) => {
    // dispatch(changeName(text));
    set(profileNameRef, text);
  };

  useEffect(() => {
    const unsubscribeProfile = onValue(profileRef, (snapshot) => {
      console.log(snapshot.val());
    });
    const unsubscribeName = onValue(profileNameRef, (snapshot) => {
      setName(snapshot.val());
    });
    const unsubscribeShowName = onValue(profileShowNameRef, (snapshot) => {
      setShowName(snapshot.val());
    });
    const unsubscribeChecked = onValue(profileCheckedRef, (snapshot) => {
      setChecked(snapshot.val());
      setName(snapshot.val());
    });

    return () => {
      unsubscribeProfile();
      unsubscribeName();
      unsubscribeShowName();
      unsubscribeChecked();
    };
  }, []);

  const handleChangeRegister = () => {
    setChecked(!checked);
    const active = checked ? name.toLowerCase() : name.toUpperCase();

    set(profileCheckedRef, active);
    set(profileNameRef, active);

    // dispatch({
    //   type: change_register,
    //   payload: active,
    // });
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (event) {
      console.warn(event);
    }
  };

  return (
    <div>
      {showName && <h1>{name}</h1>}
      <div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <input type='checkbox' onChange={handleChangeRegister} /> Push Me
      <img src='./logo192.png' alt='img'></img>
      <div>
        <button onClick={handleChangeShowName}>Change show name</button>
      </div>
      <Form onSubmit={handleChangeName} />
    </div>
  );
};
