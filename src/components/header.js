import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import Logo from '../containers/logo';
import Menu from '../containers/header/menu';
import Search from '../containers/header/search';

const Header = () => {
  return (
    <header>
        <nav>
            <div className="nav-wrapper" style={{display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
              <Link to="/"><Logo /></Link>
              <Menu />
              { useLocation().pathname==='/catalog' ? <Search /> : <div style={{width:'180px'}}></div>}
            </div>
        </nav>
    </header>
  );  
};

export default Header;