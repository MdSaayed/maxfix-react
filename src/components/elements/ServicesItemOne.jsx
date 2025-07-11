import React from "react";

const ServicesItemOne = ({ service, index, activeIndex, toggleItem }) => {
  const isActive = activeIndex === index;

  return (
    <div
      className={`services__item ${isActive ? "services__item--active" : ""}`}
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
            <i
              className={`services__item-toggle-icon fa-solid ${
                isActive ? "fa-minus" : "fa-plus"
              }`}
            ></i>
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
};

export default ServicesItemOne;
