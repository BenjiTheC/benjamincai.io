import React from 'react';
import PropTypes from 'prop-types';

export default function ExLink({ to, children }) {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}
ExLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object, PropTypes.string]).isRequired,
};
