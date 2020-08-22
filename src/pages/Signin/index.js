import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';
// import { Container } from 'styled-components';
import Logo from '~/assets/logo.svg';

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um E-mail valido.')
    .required('O E-mail é obrigatorio'),
  password: Yup.string().required('A senha e obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={Logo} alt="gobarber" />
      <Form schema={Schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit"> Acessar</button>

        <Link to="/register"> Criar conta gratuita</Link>
      </Form>
    </>
  );
}
