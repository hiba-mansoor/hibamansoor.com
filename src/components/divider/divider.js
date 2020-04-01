import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';
import './divider.css';

const Divider = ({ type, className = ''}) => {
    return type === 'circle' ? (
        <FaCircle className={`divider-circle ${className}`} />
    ) : type === 'vertical' ? (
        <div
            className={`divider-line-vertical d-none d-lg-block mx-2 my-1 ${className}`}
        />
    ) : (
        type === 'horizontal' && (
            <hr className={`divider-line-horizontal d-block d-md-none ${className}`} />
        )
    );
};

Divider.propTypes = {
    type: PropTypes.oneOf(['circle', 'horizontal', 'vertical']),
    className: PropTypes.string,
};

export default Divider;
