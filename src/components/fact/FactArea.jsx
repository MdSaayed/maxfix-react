import React from 'react';
import fact_data from '../../data/fact-data'; 
import FactItem from '../elements/FactItem';


const FactArea = () => {
    return (
        <section className="fact">
            <div className="fact__container container">
                <h2 className="fact__title visually-hidden">Fact</h2>

                <div className="fact__grid">
                    {fact_data?.map((item, index) => <FactItem  key={index} item={item} />)}
                </div>
            </div>
        </section>
    );
};

export default FactArea;