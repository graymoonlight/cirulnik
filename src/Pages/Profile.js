import React from 'react';
import '../Styles/Profile.css';

const Profile = () => {
    const handleTelegramLogin = () => {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?7';
        script.setAttribute('data-telegram-login', 'CIRILNIK_BOT');
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-auth-url', 'AUTH_URL');
        script.setAttribute('data-request-access', 'write');
        script.id = 'telegram-login-widget';
        document.getElementById('telegram-button-container').appendChild(script);
    };

    return (
        <div className='profile'>
            <button className='register_btn' onClick={handleTelegramLogin}>
                Войти с помощью телеграм
            </button>
            <div id='telegram-button-container'></div>
        </div>
    );
};

export default Profile;