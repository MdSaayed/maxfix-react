import React, { useState } from 'react';
import pricing_data from '../../data/pricing-data';
import PricingCard from '../elements/PricingCard';

const PricingArea = () => {
    const [period, setPeriod] = useState('monthly');

    return (
        <section className="pricing">
            <div className="pricing__container container">

                <h2 className="pricing__title title">
                Choose the perfect plan for your digital growth and lasting success
                </h2>

                <div className="pricing__toggle">
                    <button
                        className={`pricing__toggle-btn ${period === 'monthly' ? 'pricing__toggle-btn--active' : ''}`}
                        onClick={() => setPeriod('monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`pricing__toggle-btn ${period === 'yearly' ? 'pricing__toggle-btn--active' : ''}`}
                        onClick={() => setPeriod('yearly')}
                    >
                        Yearly
                    </button>
                </div>

                <div className="pricing__cards">
                    {pricing_data?.map((plan, index) => (
                        <PricingCard key={index} plan={plan} period={period} />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default PricingArea;
