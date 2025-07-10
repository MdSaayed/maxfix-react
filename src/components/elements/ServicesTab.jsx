import React from 'react';

const ServicesTab = ({item, setActiveIndex,index,activeIndex}) => {
    return (
    <button
        key={index}
        className={`services__tab ${index === activeIndex ? 'active' : ''}`}
        onClick={() => setActiveIndex(index)}
        >
        {item?.tab}
    </button>
    );
};

export default ServicesTab;