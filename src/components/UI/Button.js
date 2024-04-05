import React from 'react';

const Button = ({ textOnly, onClick, children }) => {
    const buttonClass = textOnly ? 'text-button' : 'button';

    return (
        <button className={buttonClass} onClick={onClick}>
            {children} {/* Render props.children as the text of the button */}
        </button>
    );
};

export default Button;
