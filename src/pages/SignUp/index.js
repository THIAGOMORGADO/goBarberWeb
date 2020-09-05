import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import { signUpRequest } from '~/store/modules/auth/actions';
import Logo from '~/assets/logo.svg';

const Schema = Yup.object().shape({
  name: Yup.string().required('O nome e obrigatorio'),
  email: Yup.string()
    .email('Insira um E-mail valido.')
    .required('O E-mail é obrigatorio'),
  password: Yup.string()
    .min(6, 'A senha tem que ter  6 caracteres')
    .required('A senha e obrigatoria'),
});
export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={Logo} alt="gobarber" />
      <Form schema={Schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>

        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}
