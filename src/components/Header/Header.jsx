import React, { useState } from 'react';
import headerImage from './../../assets/icon.svg';
import './Header.css';

const Header = () => {
    const [expandedImage, setExpandedImage] = useState(false);

    return (
        <div className="head-container">
            <img
                src={headerImage}
                className={`head-image ${
                    expandedImage
                        ? 'head-image-contracted'
                        : 'head-image-expanded'
                }`}
                alt="header"
            />
            <h1 className="head-text">Name It!</h1>
            <button onClick={() => setExpandedImage(!expandedImage)}>
                Click!
            </button>
        </div>
    );
};

export default Header;
