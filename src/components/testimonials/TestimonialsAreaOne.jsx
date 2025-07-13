import React, { useEffect, useRef } from 'react';
import testimonials_data from "../../data/testimonials-data";
import TestimonialsItemOne from '../elements/TestimonialsItemOne';
import ButtonArrow from '../../common/ButtonArrow';
import Subtitle from '../../common/Subtitle';

const TestimonialsAreaOne = () => {
    const listRef = useRef(null);
    const lastCardRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
        if (lastCardRef.current) {
            lastCardRef.current.style.transform =
            window.innerWidth >= 1190 ? 'translateY(-150px)' : 'translateY(0)';
        }
        };

        handleResize(); // on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (index) => {
        if (listRef.current) listRef.current.style.marginTop = '-7.5rem';

        if (index === testimonials_data.length - 1 && lastCardRef.current) {
        lastCardRef.current.style.transform = 'translateY(0)';
        }
    };

    const handleMouseLeave = (index) => {
        if (listRef.current) listRef.current.style.marginTop = '0';

        if (index === testimonials_data.length - 1 && lastCardRef.current) {
        lastCardRef.current.style.transform =
            window.innerWidth >= 1190 ? 'translateY(-150px)' : 'translateY(0)';
        }
    };

    return (
        <section className="testimonials testimonials--one">
            <div className="testimonials__container container">

                <div className="testimonials__title-wrap title-wrap__flex">
                    <Subtitle text='Testimonials' />
                    <h2 className="testimonials__title title-lg">Clients Reviews</h2>
                    <ButtonArrow link='/services' text='View All Services' />
                </div>

                <div className="testimonials__list" ref={listRef}>
                    {testimonials_data.map((testimonial, index) => (
                        <TestimonialsItemOne
                        key={testimonial.id}
                        testimonial={testimonial}
                        index={index}
                        isLast={index === testimonials_data.length - 1}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        lastCardRef={lastCardRef}
                        />
                    ))}  
                </div>
                
            </div>
        </section>
    );
};

export default TestimonialsAreaOne;