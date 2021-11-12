import React from 'react';
import Logo from '../containers/logo';
import Menu from '../containers/header/menu';

const Header = () => {
  return (
    <header>
        <nav>
            <div className="nav-wrapper" style={{display:'flex', flexDirection: 'row'}}>
              <a href="#!"><Logo /></a>
              <Menu />
            </div>
        </nav>
    </header>
  );  
};

export default Header;