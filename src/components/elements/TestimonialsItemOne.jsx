import React from 'react';

const TestimonialsItemOne = ({
  testimonial,
  index,
  isLast,
  onMouseEnter,
  onMouseLeave,
  lastCardRef,
}) => {
  return (
    <div className="testimonial-card"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
      ref={isLast ? lastCardRef : null}
    >
      <svg width="53" height="53" viewBox="0 0 53 53" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.83 23.33C38.53 23.33 36.27 22.65 34.35 21.37C32.43 20.08 30.94 18.26 30.05 16.13C29.17 14 28.94 11.65 29.39 9.39C29.84 7.13 30.95 5.05 32.58 3.42C34.22 1.79 36.29 0.67 38.56 0.22C40.82 -0.23 43.17 0.01 45.3 0.89C47.43 1.77 49.25 3.27 50.53 5.19C51.82 7.1 52.5 9.36 52.5 11.67C52.5 15.96 48.61 29.58 40.83 52.5H35L40.83 23.33ZM11.67 23.33C9.36 23.33 7.1 22.65 5.19 21.37C3.27 20.08 1.77 18.26 0.89 16.13C0.01 14 0.22 11.65 0.67 9.39C1.12 7.13 2.23 5.05 3.42 3.42C5.05 1.79 7.13 0.67 9.39 0.22C11.65 -0.23 14 0.01 16.13 0.89C18.26 1.77 20.09 3.27 21.37 5.19C22.65 7.1 23.33 9.36 23.33 11.67C23.33 15.96 19.44 29.58 11.67 52.5H5.83L11.67 23.33Z"
          fill="#FFFB1F"
        />
      </svg>
      <p className="testimonial-card__text">{testimonial.text}</p>
      <div className="testimonial-card__footer testimonial-card__footer--stacked">
        <div className="testimonial-card__img-wrap">
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="testimonial-card__image"
          />
        </div>
        <div className="testimonial-card__name">{testimonial.name}</div>
        <div className="testimonial-card__position">{testimonial.position}</div>
      </div>
    </div>
  );
};

export default TestimonialsItemOne;
