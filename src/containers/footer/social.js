import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Social () {
    return (
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <SocialIcon url="https://twitter.com/"/>
            <SocialIcon url="https://instagram.com/"/>
            <SocialIcon url="https://facebook.com/"/>
            <SocialIcon url="https://github.com/"/>
        </div>
    );
}