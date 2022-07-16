import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const CookieBanner = () => {
    Cookies.set('test', 'nice');
    return (
        <CookieConsent
            onAccept={(byScroll) => {
                alert(`yay! \n by scrolling? ${byScroll}`);
            }}
            debug={true}
            enableDeclineButton
            acceptOnScroll
            acceptOnScrollPercentage={80}
            declineButtonText='Decline (optional)'
            onDecline={() => {
                alert('nay!');
            }}
            style={{
                background: '#FAF9F6',
                color: '#000',
                boxShadow: ' 0 0 50px rgba(227, 221, 221, 0.976)'
            }}
            buttonStyle={{
                fontWeight: 'bold',
                background: '#FAF9F6',
                border: '2px solid #0a66c2'
            }}>
            <p className='consent-text'>This website uses cookies to enhance the user experience.</p>
        </CookieConsent>
    );
};

export default CookieBanner;
