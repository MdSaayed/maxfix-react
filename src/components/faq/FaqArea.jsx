import React, { useState } from 'react';
import faq_data from "../../data/faq-data"
import FaqItem from '../elements/FaqItem';
import { Link } from 'react-router-dom';

const FaqArea = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="faq">
            <div className="faq__container container">

                <div className="faq__sidebar">
                    <h2 className="faq__title title-lg">FAQ</h2>
                    <div className="faq__sidebar-text-wrap">
                        <p className="faq__subtitle">Having Another Question?</p>
                        <Link to="#" className="faq__button process__btn btn-arrow btn-arrow__black">
                            <span className="faq__button-text btn-arrow__text">Get In Touch</span>
                        </Link>
                    </div>
                </div>

                <div className="faq__content">
                    {faq_data.map((item, index) => (
                        <FaqItem
                            key={item.id}
                            item={item}
                            index={index}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default FaqArea;