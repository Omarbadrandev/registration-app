import React from 'react';
import LinkComponent from '../LinkComponent';
import Title from '../Title';

const Editor = () => {
    return (
        <section>
            <Title title={'Editors Page'} />
            <br />
            <p>You must have been assigned an Editor role.</p>
            <div className='flexGrow'>
                <LinkComponent to='/' text={'Home'} />
            </div>
        </section>
    );
};

export default Editor;
