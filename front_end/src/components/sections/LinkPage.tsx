import React from 'react';
import LinkComponent from '../LinkComponent';
import Subtitle from '../Subtitle';
import Title from '../Title';

const LinkPage = () => {
    const publicLinks = [
        { path: '/login', text: 'Login' },
        { path: '/register', text: 'Register' }
    ];
    const privateLinks = [
        { path: '/', text: 'Home' },
        { path: '/editor', text: 'Editors Page' },
        { path: '/admin', text: 'Admin Page' }
    ];

    //TODO: could be refactored better than that
    return (
        <section>
            <Title title={'Links'} />
            <br />
            <Subtitle text={'Public'} />
            {publicLinks.map((link) => (
                <LinkComponent to={link.path} text={link.text} key={link.text} />
            ))}
            <br />
            <Subtitle text={'Private'} />
            {privateLinks.map((link) => (
                <LinkComponent to={link.path} text={link.text} key={link.text} />
            ))}
        </section>
    );
};

export default LinkPage;
