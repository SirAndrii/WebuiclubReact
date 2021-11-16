import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../containers/logo';
import Menu from '../containers/header/menu';

const Header = () => {
  return (
    <header>
        <nav>
            <div className="nav-wrapper" style={{display:'flex', flexDirection: 'row'}}>
              <Link to="/"><Logo /></Link>
              <Menu />
            </div>
        </nav>
    </header>
  );  
};

export default Header;