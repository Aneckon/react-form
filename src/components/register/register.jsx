import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import InputMask from 'react-input-mask';

import { Title, Button } from '..';
import { registerUser } from '../axios';

import './register.css';

export const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const [opacity, setOpacity] = useState(false);

  const handleRegistr = (data) => {
    registerUser({ data, navigate });
  };

  return (
    <div className="auth">
      <Title>Регистрация</Title>
      <form onSubmit={handleSubmit(handleRegistr)}>
        <input
          {...register('firstName', {
            required: true,
            maxLength: 20,
            pattern: /^[a-z0-9A-ZА-Яа-я]/,
          })}
          className={errors?.name?.type === 'pattern' ? 'invalid' : undefined}
          placeholder="Имя"
        />
        <input
          {...register('lastName', {
            required: true,
            maxLength: 20,
            pattern: /^[a-z0-9A-Z]/,
          })}
          className={errors?.username?.type === 'pattern' ? 'invalid' : undefined}
          placeholder="Никнейм"
        />
        <input
          {...register('email', {
            required: true,
            maxLength: 20,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          className={errors?.email?.type === 'pattern' ? 'invalid' : undefined}
          placeholder="Email"
        />
        <InputMask
          {...register('tel', {
            required: true,
            maxLength: 20,
          })}
          mask="+7 999 999 999"
          className={errors?.tel?.type === 'pattern' ? 'invalid' : undefined}
          type="tel"
          placeholder="Телефон"
        />
        <div className="password">
          <div
            onClick={() => setOpacity(!opacity)}
            className={opacity ? 'none' : 'password__opacity'}></div>
          <input
            {...register('password', {
              required: true,
              maxLength: 20,
              pattern: /[a-z0-9A-Z]{8,16}/,
            })}
            className={errors?.password?.type === 'pattern' ? 'invalid' : undefined}
            type={!opacity ? 'password' : 'text'}
            placeholder="Пароль"
          />
        </div>
        <label className="checkbox">
          Я даю свое согласие на обработку персональных данных
          <input {...register('checkbox', { required: true })} type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <Button disabled={isValid}>Зарегистрироваться</Button>
        <p>
          Есть аккаунт? <NavLink to="/login">Войти</NavLink>
        </p>
      </form>
    </div>
  );
};
