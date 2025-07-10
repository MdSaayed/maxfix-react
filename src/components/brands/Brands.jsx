import React from 'react';

const brandLogos = [
  { src: './assets/images/brand/brand-7.png', alt: 'Logo' },
  { src: './assets/images/brand/brand-8.png', alt: 'Logo' },
  { src: './assets/images/brand/brand-9.png', alt: 'Logo' },
  { src: './assets/images/brand/brand-10.png', alt: 'Logo' },
  { src: './assets/images/brand/brand-11.png', alt: 'Logo' },
  { src: './assets/images/brand/brand-12.png', alt: 'Logo' },
];

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands__container container">
        <h2 className="brands__title">(Loved by teams around the world)</h2>

        <div className="brands__list">
          {brandLogos?.map((brand, index) => (
            <div className="brands__item" key={index}>
              <img
                src={brand?.src}
                alt={`${brand?.alt} ${index + 1}`}
                className="brands__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
