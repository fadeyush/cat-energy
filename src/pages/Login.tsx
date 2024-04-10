import React, { FC } from 'react';
import classes from '../styles/Login.module.scss'
import MyButton from '../components/UI/button/MyButton';
import { buttonTypes } from '../types/button';
import { useDispatch } from 'react-redux';
import MyInput from '../components/UI/input/MyInput';

const Login: FC = () => {
    const dispatch = useDispatch();
    return (
        <div className={classes.logIn__wrapper}>
            <h1 className={classes.logIn__title}>Авторизация</h1>
            <MyInput type='text' placeholder='Введите логин'></MyInput>
            <MyInput type='password' placeholder='Введите пароль'></MyInput>
            <MyButton className={classes.logIn__button} colorType={buttonTypes.green} onClick={()=>dispatch({type: 'LOG_IN', payload: true})}>Войти</MyButton>

            <p className={classes.logIn__info}>Имитация авторизации, можно просто нажать на кнопку "Войти"<span>&#128521;</span></p>
        </div>
    );
};

export default Login;