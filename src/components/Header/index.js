import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notificatios from '../Notification/index';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-purple.svg';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  console.tron.log(profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DashBoard</Link>
        </nav>

        <aside>
          <Notificatios />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
