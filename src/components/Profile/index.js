import { shallowEqual, useDispatch, useSelector } from 'react-redux';
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
  const showName = useSelector(selectShowName, shallowEqual);
  const name = useSelector(selectName, shallowEqual);
  const checked = useSelector(selectChecked, shallowEqual);

  const handleChangeShowName = () => {
    dispatch(changeShowName);
  };

  const handleChangeName = (text) => {
    dispatch(changeName(text));
  };

  const handleChangeRegister = () => {
    // const active = checked
    // ? data.name.toLowerCase()
    // : data.name.toUpperCase();

    const active = checked ? name.toLowerCase() : name.toUpperCase();

    dispatch({
      type: change_register,
      payload: active,
    });
  };

  return (
    <div>
      {/* {data.showName && <h1>{data.name}</h1>} */}
      {showName && <h1>{name}</h1>}
      <input type='checkbox' onChange={handleChangeRegister} /> Push Me
      <img src='./logo192.png' alt='img'></img>
      <div>
        <button onClick={handleChangeShowName}>Change show name</button>
      </div>
      <Form onSubmit={handleChangeName} />
    </div>
  );
};
