import { Link } from 'react-router-dom';
import React from 'react';

interface LinkComponentProps {
    to: string;
    text: string;
}

const LinkComponent = ({ to, text }: LinkComponentProps) => {
    return <Link {...{ to }}>{text}</Link>;
};

export default LinkComponent;
