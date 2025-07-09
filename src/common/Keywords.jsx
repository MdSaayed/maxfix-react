import React from 'react';

const Keywords = () => {

    return (
        <section className="keywords">
            <div className="keywords__container container">
                <h2 className="keywords__title visually-hidden">Keywords</h2>

                <div className="keywords__wrapper">
                    <div className="keywords__track">
                        <div className="keywords__group">
                        <span className="keywords__item">AGENCY</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">BRANDING</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">TYPOGRAPHY</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">DESIGN</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">INTERACTION</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">CREATIVITY</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">STRATEGY</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">DEVELOPMENT</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">DIGITAL AGENCY</span>
                        </div>
                        {/* Duplicate for smooth scrolling */}
                        <div className="keywords__group">
                        <span className="keywords__item">AGENCY</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">BRANDING</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">TYPOGRAPHY</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">DESIGN</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">INTERACTION</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">CREATIVITY</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">STRATEGY</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">DEVELOPMENT</span>
                        <span className="keywords__separator">✦</span>
                        <span className="keywords__item">DIGITAL AGENCY</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Keywords;