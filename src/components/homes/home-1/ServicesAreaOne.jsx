import React, { useState } from 'react';
import services_data from '../../../data/services_data'; 
import { Link } from 'react-router-dom';
import ButtonArrow from '../../../common/ButtonArrow';

const ServicesAreaOne = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleItem = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="services services--one">
            <div className="services__container container">

                <div className="services__title-wrap title-wrap__flex">
                    <div className="services__subtitle-wrap subtitle-wrap">
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
                            <path d="M17.82 13.02C17.6326 12.8337 17.3792 12.7292 17.115 12.7292C16.8508 12.7292 16.5974 12.8337 16.41 13.02C16.2237 13.2074 16.1192 13.4608 16.1192 13.725C16.1192 13.9892 16.2237 14.2426 16.41 14.43L20.2 18.22H2V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18.22C0 18.7504 0.210714 19.2591 0.585786 19.6342C0.960859 20.0093 1.46957 20.22 2 20.22H20.15L16.41 23.97C16.2237 24.1574 16.1192 24.4108 16.1192 24.675C16.1192 24.9392 16.2237 25.1926 16.41 25.38C16.5963 25.5647 16.8477 25.6689 17.11 25.67C17.2416 25.6708 17.3721 25.6455 17.4939 25.5958C17.6157 25.546 17.7266 25.4727 17.82 25.38L24 19.22L17.82 13.02Z" fill="#FFFB1F"/>
                        </svg>
                        <span className="services__subtitle subtitle">What We Offer</span>
                    </div>
                    <h2 className="services__title title-lg">Our Services</h2>
                    {/* <Link to="#" className="services__btn btn-arrow">
                        <span className="btn-arrow__text">View All Services</span>
                    </Link> */}

                    <ButtonArrow link='/services' text='View All Services' />
                </div>

                <div className="services__content">
                    <p className="services__desc title">
                        We provide top-tier digital services designed to elevate our brand and drive measurable results. Our offerings include custom web design and development,
                    </p>
                    <img src="./assets/images/services/services-1.png" alt="Services image" className="services__image"/>
                </div>

                <div className="services__list">
                    {services_data?.map((service, index) => {
                        const isActive = activeIndex === index;

                        return (
                        <div className={`services__item ${
                            isActive ? "services__item--active" : ""
                            }`}
                            key={index}
                        >
                            <div className="services__item-header">
                                <span className="services__item-index">// {index + 1}</span>
                                <div className="services__item-title-wrap">
                                    <span className="services__item-title">{service?.title}</span>
                                    <div
                                        className="services__item-toggle-wrap"
                                        onClick={() => toggleItem(index)}
                                        style={{ cursor: "pointer" }}
                                        >
                                        <i className={`services__item-toggle-icon fa-solid ${isActive? 'fa-minus' : 'fa-plus'}`}></i>
                                    </div>
                                </div>
                            </div>

                            <div
                            className="services__item-content"
                            style={{
                                visibility: isActive ? "visible" : "hidden",
                                transform: isActive ? "scaleY(1)" : "scaleY(0)",
                                opacity: isActive ? 1 : 0,
                                height: isActive ? "auto" : 0,
                                padding: isActive ? "2rem" : "0 2rem",
                                marginBottom: isActive ? "2rem" : 0,
                                transition: "all 0.5s ease",
                                overflow: "hidden",
                            }}
                            >
                            <div className="services__item-text">
                                <p className="services__item-desc">{service?.description}</p>
                                <ul className="services__item-tags">
                                {service?.tags?.map((tag, i) => (
                                    <li className="services__item-tag" key={i}>
                                    {tag}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className="services__item-images">
                                {service?.images?.map((img, i) => (
                                <div className="services__item-image-wrap" key={i}>
                                    <img
                                    src={img}
                                    alt={`Preview ${i + 1}`}
                                    className="services__item-image"
                                    />
                                </div>
                                ))}
                            </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
                
            </div>
        </section>
    );
};

export default ServicesAreaOne;