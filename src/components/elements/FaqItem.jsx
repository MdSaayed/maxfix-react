import { useEffect, useRef } from "react";

const FaqItem = ({ item, index, activeIndex, setActiveIndex, ref }) => {
  const answerRef = useRef(null);
  const isActive = index === activeIndex;

  useEffect(() => {
    if (answerRef.current) {
      if (isActive) {
        answerRef.current.style.height = answerRef.current.scrollHeight + "px";
      } else {
        answerRef.current.style.height = "0px";
      }
    }
  }, [isActive]);

  const handleToggle = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div
      className={`faq__item ${isActive ? "faq__item--active" : ""}`}
      ref={ref}
    >
      <div className="faq__question">
        <span className="faq__number">
          {String(index + 1).padStart(3, "0")}.
        </span>
        <div className="faq__question-inner">
          <h3 className="faq__question-text">{item.question}</h3>
          <button className="faq__toggle" onClick={handleToggle}>
            <i className="fa-solid fa-arrow-down faq__toggle-icon"></i>
          </button>
        </div>
      </div>
      <div className="faq__answer" ref={answerRef}>
        <p className="faq__answer-text">{item.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
