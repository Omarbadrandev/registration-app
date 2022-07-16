import React from 'react';

interface SuccessSectionProps {
    title: string;
    linkText: string;
    link: string;
}
export const SuccessSection = (props: SuccessSectionProps) => {
    const { title, linkText, link } = props;
    return (
        <section>
            <h1>{title}</h1>
            <p>
                <a href={link}> {linkText}</a>
            </p>
        </section>
    );
};

export default SuccessSection;
