import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import logo from '../../../assets/logo.svg';

const Header = () => {
  return (
    <HeaderArea>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to=''>Login</Link>
            </li>
            <li>
              <Link className='' to=''>Cadastrar</Link>
            </li>
            <li>
              <Link className='btn-cta' to=''>Poste um anúncio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}

export default Header;