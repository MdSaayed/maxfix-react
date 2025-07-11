import React from 'react';

const TestimonialsItemTwo = ({isActive,index,testimonial,handleToggle}) => {
    return (
        <div className={`testimonials__item ${isActive ? 'testimonials__item--active' : ''}`} >
            <div className="testimonials__item-header">
                <span className="testimonials__item-index">// {index + 1}</span>
                <div className="testimonials__item-title-wrap">
                <div className="testimonials__title-group">
                    <span className="testimonials__item-title">{testimonial.name}</span>
                    <span className="testimonials__item-role">{testimonial.role}</span>
                </div>
                <div
                    className="testimonials__item-toggle-wrap"
                    onClick={() => handleToggle(index)}
                >
                    <i
                    className={`testimonials__item-toggle-icon fa-solid fa-arrow-down ${
                        isActive ? 'rotate' : ''
                    }`}
                    ></i>
                </div>
                </div>
            </div>

            <div
                className="testimonials__item-content"
                style={{
                visibility: isActive ? 'visible' : 'hidden',
                transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                opacity: isActive ? 1 : 0,
                height: isActive ? 'auto' : '0px',
                padding: isActive ? '2rem' : '0px 2rem',
                marginBottom: isActive ? '2rem' : '0px',
                transition: 'all 0.5s ease',
                }}
            >
                <div className="testimonials__item-img-wrap">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonials__item-image"
                />
                </div>
                <div className="testimonials__item-text">
                <svg
                    width="42"
                    height="38"
                    viewBox="0 0 42 38"
                    fill="none"
                >
                    <path
                    d="M18.1429 2.99985C10.9561 7.66753 7.36269 13.2889 7.36269 19.8638C7.36269 21.9094 7.71382 22.9322 8.41607 22.9322L9.13901 22.7341C9.70738 22.5119 10.1674 22.4008 10.5192 22.4008C12.5785 22.4008 14.2976 23.16 15.6765 24.6784C17.0555 26.1969 17.7455 28.0709 17.7468 30.3004C17.7455 32.4435 17.0001 34.2625 15.5104 35.7575C14.0207 37.2513 12.2243 37.9981 10.1212 37.9981C7.18561 37.9981 4.76363 36.7741 2.85526 34.3261C0.951753 31.8818 1.37058e-06 28.8097 1.37058e-06 25.1099C-0.0012157 20.9249 0.808138 17.0961 2.42806 13.6234C4.05164 10.152 6.52717 7.01324 9.85465 4.2072C13.1846 1.40364 15.3096 0.00123451 16.2297 0C16.8431 0 17.347 0.299985 17.7413 0.899956C18.1356 1.49869 18.3328 2.02027 18.3328 2.4647L18.1374 2.998L18.1429 2.99985ZM41.8028 2.99985C34.616 7.66629 31.0232 13.2882 31.0244 19.8657C31.0244 21.9113 31.3756 22.9341 32.0778 22.9341L32.8007 22.7359C33.3691 22.5137 33.8292 22.4026 34.1809 22.4026C36.1964 22.4026 37.9045 23.1618 39.3054 24.6803C40.7087 26.1963 41.4097 28.0702 41.4085 30.3022C41.4073 32.4453 40.6618 34.2644 39.1721 35.7594C37.6824 37.2531 35.886 38 33.7829 38C30.8473 38 28.4254 36.776 26.517 34.328C24.6135 31.8836 23.6617 28.8116 23.6617 25.1117C23.6593 20.8823 24.4808 17.0208 26.1263 13.5271C27.7694 10.0322 30.2443 6.9046 33.5511 4.14424C36.8639 1.38265 38.9786 0.00185251 39.8951 0.00185251C40.5097 0.00185251 41.0148 0.301837 41.4103 0.901808C41.8034 1.50178 42 2.02398 42 2.4684L41.8028 2.99985Z"
                    fill="black"
                    />
                </svg>
                <p className="testimonials__item-desc">{testimonial.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsItemTwo;