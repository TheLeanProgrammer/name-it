import React, { useState } from 'react';
import headerImage from './../../assets/icon.svg';
import './Header.css';

const Header = ({ focusedHeader }) => {
    return (
        <div className="head-container">
            <img
                src={headerImage}
                className={`head-image ${
                    focusedHeader
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
                alt="header"
            />
            <h1 className="head-text">Name It!</h1>
        </div>
    );
};

export default Header;
