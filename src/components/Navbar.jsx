import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// CSS
import "../styles/Navbar.css";

function Navbar({ click }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
            setTimeout(() => {
                setShowDropdown(false);
            }, 1300);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsClicked(!isClicked);
        if (!isClicked) {
            setShowDropdown(true);
        }
    };

    const handleClickOutside = (event) => {
        if (event.target.closest('.dropdown') === null) {
            setShowDropdown(false);
            setIsClicked(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='Navbar'>
            <nav>
                <a href="#" style={{ display: "flex" }}>
                    <img src="/logo.svg" alt="logo" style={{ width: 150 }} />
                </a>
                <ul>
                    <li><a href="#features">Features</a></li>
                    {/* <li className="dropdown" 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="#solutions" onClick={handleClick}>Solutions</a>
                        {showDropdown && (
                            <ul className="dropdown-menu">
                                <li><a href="#cyber-security">Cyber Security</a></li>
                                <li><a href="#custom-ai">Custom AI</a></li>
                            </ul>
                        )}
                    </li> */}
                    <li><a href="#team">Team</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    {/* <li><a href="https://www.gitbook.com/" target='_blank'>Docs</a></li> */}
                </ul>
                <div className="toggle">
                    <a href="#join" className="wait">Join</a>
                    <i onClick={click}>
                        <box-icon name='menu' color="white"></box-icon>
                    </i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
