import React from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import '../Styles/Header.css';
import backIcon from '../Images/SocialIcons/back.svg';
import profileIcon from '../Images/SocialIcons/profile.svg';
import homeIcon from '../Images/SocialIcons/home.svg';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        navigate(-1);
    };

    // Проверяем, что текущий путь не является корневым '/'
    const isNotHomePage = location.pathname !== '/';

    return (
        <header className="header">
            <nav className='header-nav'>
                <button onClick={handleGoBack} className='header-nav-button'>
                    <img src={backIcon} alt="Back" className='header-nav-back_icon' />
                </button>
                <div className='header-left_container'>
                    <Outlet />
                    {isNotHomePage && (
                        <Link to="/" className='header-nav-home_link'>
                            <img src={homeIcon} alt="Home" className='header-nav-home_icon' />
                        </Link>
                    )}
                    <Link to="/profile" className='header-nav-profile_link'>
                        <img src={profileIcon} alt="Profile" className='header-nav-profile_icon' />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;