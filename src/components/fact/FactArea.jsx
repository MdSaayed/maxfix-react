import React from 'react';
import fact_data from '../../data/fact-data'; 


const FactArea = () => {
    return (
        <section className="fact">
            <div className="fact__container container">
                <h2 className="fact__title visually-hidden">Fact</h2>

                <div className="fact__grid">
                    {fact_data.map((item, index) => (
                        <div className="fact__item" key={index}>
                            {item.year && <div className="fact__year">{item.year}</div>}
                            {item.number && <div className="fact__number">{item.number}</div>}
                            <div className="fact__title">{item.title}</div>
                            <div className="fact__subtitle">{item.subtitle}</div>

                            <div className={item.type === "avatar" ? "fact__avatars" : "fact__icons"}>
                                {item.avatars.map((img, i) => (
                                <img
                                    key={i}
                                    src={`./assets/images/global/${img}`}
                                    alt={item.type === "avatar" ? "User Avatar" : "Fact Icon"}
                                    className={item.type === "avatar" ? "fact__avatar" : "fact__icon"}
                                />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FactArea;