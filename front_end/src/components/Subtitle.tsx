import React from 'react';

const Subtitle = (props: { text: string }) => {
    const { text } = props;
    return <h2>{text}</h2>;
};

export default Subtitle;
