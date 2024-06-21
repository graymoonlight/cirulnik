import React from 'react';
import '../Styles/Footer.css';
import telegramIcon from '../Images/SocialIcons/telegram.svg';
import vkIcon from '../Images/SocialIcons/vk.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <h4 className='footer-copyright'>©  ЦирюльникЪ. Все права защищены</h4>
            <div className='footer-link_container'>
                <a href="#telegram" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" className='footer-link_container-icon' />
                </a>
                <a href="#vk" target="_blank" rel="noopener noreferrer">
                    <img src={vkIcon} alt="VK" className='footer-link_container-icon' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;