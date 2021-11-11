import React from 'react';
import Logo from '../containers/logo';
import Social from '../containers/footer/social';
import Copyright from '../containers/footer/copyright';
import Lorem from '../containers/lorem';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
            <div className="row" style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                <div className="col s4">
                    <Lorem textRange='80'><h4>some Title</h4></Lorem>
                </div> 
                <div className="col s4"><Logo/></div>
                <div className="col s4"><Social/></div>
            </div>
      </div>  
      <Copyright/>
    </footer>
  );
}

export default Footer;