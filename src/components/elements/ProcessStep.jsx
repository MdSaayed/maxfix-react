import React from 'react';

const ProcessStep = ({step}) => {
    return (
        <div className="process__step">
            <p className="process__step-label">{step?.step}</p>
            <div className="process__step-content">
                <div className="process__step-image">
                <img src={step?.image} alt={step?.alt} />
                </div>
                <p className="process__step-desc">{step?.description}</p>
            </div>
        </div>
    );
};

export default ProcessStep;