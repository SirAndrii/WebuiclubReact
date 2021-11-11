import React from 'react';

export default function Copyright () {
    return(
        <div className="footer-copyright">
            <div className="container">
            © 2014 - {new Date().getFullYear} Copyright Text, all rights reserved
            <a className="grey-text text-lighten-4 right" href="#!">Privacy Policy</a>
            </div>
        </div>
    );
}