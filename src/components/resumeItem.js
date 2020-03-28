import React from 'react';
import PropTypes from 'prop-types';

const ResumeItem = ({heading, dates, title, secondTitle, subtitle, description}) => (
    <div className="d-flex flex-column flex-lg-row pb-3">
        <div className={`d-flex flex-row flex-lg-column ${description ? 'w-75' : 'w-100 w-md-50'} text-left text-lg-right`} style={{width: `${!description && '24.25%'}` }}>
            <h3 className="mb-1">{heading}</h3>
            <p className="ml-1 ml-lg-0">{dates}</p>
        </div>
        <div
            style={{
                borderLeft: `1px solid lightgrey`,
            }}
            className="d-none d-lg-block mx-2 my-1"
        />
        <div className="d-flex flex-column">
            <h3 className="mb-1">{title}</h3>
            {secondTitle && <h3 className="mb-1">{secondTitle}</h3>}
            {subtitle && <h4 className={`${!description ? 'mb-2' : 'mb-1'}`}>{subtitle}</h4>}
            {description && <p>{description}</p>}
        </div>
    </div>
);

ResumeItem.propTypes = {
    heading: PropTypes.string.isRequired, 
    dates: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    secondTitle: PropTypes.string, 
    description: PropTypes.string
};

export default ResumeItem;