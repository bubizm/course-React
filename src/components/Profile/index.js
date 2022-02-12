import { accordionActionsClasses } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { changeShowName, change_name, change_register, } from '../../store/profile/actions';
import { Form } from '../Form';
import './style.css';

export const Profile = () => {
    // const storeState = store.getState();
    // console.log(storeState); 
    // Функционал тот же что и ниже, только это для редакса, 
    // а внизу для реакт-редакса

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    console.log(data);

    const handleChangeShowName = () => {
        dispatch(changeShowName);
    };

    const handleChangeName = (text) => {
        dispatch({
            type: change_name,
            payload: text,
        });
    }

    const handleChangeRegister = () => {
        const active = data.checked 
        ?  data.name.toLowerCase() 
        :  data.name.toUpperCase();

        dispatch({
            type: change_register,
            payload: active,
        })
    }

    return (
        <div>
            {data.showName && <h1>{data.name}</h1>}
            <input 
            type='checkbox' 
            onChange={ handleChangeRegister } 
            /> Push Me
            <img src="./logo192.png" alt='img'></img>
            <div>
                <button 
                onClick={ handleChangeShowName }>
                    Change show name
                </button>
            </div>
            <Form onSubmit={ handleChangeName } />
        </div>
    )
}