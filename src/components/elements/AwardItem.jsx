import React from "react";

const AwardItem = ({award,index}) => {
  return (
    <div className="awards__row">
      <div className="awards__col">{String(index + 1).padStart(2, "0")}</div>
      <div className="awards__col">{award.title}</div>
      <div className="awards__col">{award.subtitle}</div>
      <div className="awards__col">{award.year}</div>
      <div className="awards__image">
        <img src={award.image} alt={`${award.title} image`} />
      </div>
    </div>
  );
};

export default AwardItem; 
