import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { Title, Button } from '..';
import { loginUser } from '../axios';

import './login.css';

export const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const [opacity, setOpacity] = useState(false);

  const handleLogin = (data) => {
    loginUser({ data, navigate });
  };

  return (
    <div className="auth">
      <Title>Вход</Title>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          {...register('email', {
            required: true,
            maxLength: 20,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          className={errors?.email?.type === 'pattern' ? 'invalid' : ''}
          placeholder="Email"
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
            className={errors?.password?.type === 'pattern' ? 'invalid' : ''}
            type={!opacity ? 'password' : 'text'}
            placeholder="Пароль"
          />
        </div>
        <Button disabled={isValid}>Войти</Button>
        <p>
          Нет аккаунта? <NavLink to="/">Зарегистрироваться</NavLink>
        </p>
      </form>
    </div>
  );
};
