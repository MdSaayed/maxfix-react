import React from 'react';

const ServicesItemTwo = ({index,activeIndex,item}) => {
    return (
        <div
            key={index}
            className={`services__content ${index === activeIndex ? 'active' : ''}`}
            data-content={index + 1}
            >
            <img src={item.image} alt="Services Image" />
            <p className="services__details-text">{item.text}</p>
            <div className="services__tags">
                {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="services__tag">
                    {tag}
                </span>
                ))}
            </div>
        </div>
    );
};

export default ServicesItemTwo;