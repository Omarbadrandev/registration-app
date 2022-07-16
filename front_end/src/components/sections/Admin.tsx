import React from 'react';
import LinkComponent from '../LinkComponent';
import Title from '../Title';
import Users from './Users';

const Admin = () => {
    return (
        <section>
            <Title title={'Admins Page'} />
            <br />
            <Users />
            <br />
            <div className='flexGrow'>
                <LinkComponent to='/' text={'Home'} />
            </div>
        </section>
    );
};

export default Admin;
