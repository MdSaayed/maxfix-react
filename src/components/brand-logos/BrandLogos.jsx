import React from 'react';

const BrandLogos = () => {
    return (
        <section className="brand-logos">
            <div className="brand-logos__container container">

                <h2 className="brand-logos__title">(Loved by teams around the world)</h2>

                <div className="brand-logos__grid">
                    <div className="brand-logos__item">
                        <img src="./assets/images/brand/brand-1.png" alt="Logo 2" className="brand-logos__image"/>
                    </div>
                    <div className="brand-logos__item">
                        <img src="./assets/images/brand/brand-2.png" alt="Logo 3" className="brand-logos__image"/>
                    </div>
                    <div className="brand-logos__item">
                        <img src="./assets/images/brand/brand-3.png" alt="Logo 4" className="brand-logos__image"/>
                    </div>
                    <div className="brand-logos__item">
                        <img src="./assets/images/brand/brand-4.png" alt="Logo 5" className="brand-logos__image"/>
                    </div>
                    <div className="brand-logos__item">
                        <img src="./assets/images/brand/brand-5.png" alt="Logo 6" className="brand-logos__image"/>
                    </div>
                    <div className="brand-logos__item">
                        <img src="./assets/images/brand/brand-6.png" alt="Logo 6" className="brand-logos__image"/>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default BrandLogos;