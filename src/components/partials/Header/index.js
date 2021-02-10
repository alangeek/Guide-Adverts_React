import React from 'react';
import { Link } from 'react-router-dom';

import { isLogged } from '../../../helpers/AuthHandler';

import { HeaderArea } from './styled';
import logo from '../../../assets/logo.svg';

const Header = () => {
  let logged = isLogged();

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
            {logged && 
              <>
                <li>
                  <Link to='/my-account'>Minha Conta</Link>
                </li>
                <li>
                  <Link to='/logout'>Sair</Link>
                </li>
                <li>
                  <Link className='btn-cta' to='/post-an-ad'>Anunciar</Link>
                </li>
              </>
            }
            {!logged &&
              <>
                <li>
                  <Link to='/signin'>Login</Link>
                </li>
                <li>
                  <Link to='/signup'>Cadastrar</Link>
                </li>
                <li>
                  <Link className='btn-cta' to='/signin'>Anunciar</Link>
                </li>
              </>
            }
            
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}

export default Header;