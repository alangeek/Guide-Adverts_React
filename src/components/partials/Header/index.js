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
      </div>
    </HeaderArea>
  );
}

export default Header;