import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({plan,period}) => {
    return (
        <div
            className={`pricing__card ${plan.featured ? 'pricing__card--featured' : ''}`}
            key={plan?.id}
            >
            <h3 className="pricing__plan-title">{plan?.title}</h3>
            <p className="pricing__price title">${plan[period]?.toFixed(2)}</p>
            <p className="pricing__subtitle">{plan.subtitle}</p>

            <Link to="/contact" className={`pricing__btn ${plan?.featured ? 'pricing__btn--featured' : ''}`} > Choose Your Plan </Link>

            <ul className="pricing__features">
                {plan?.features?.map((feature, i) => (
                <li className="pricing__feature" key={i}>
                    {feature}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;