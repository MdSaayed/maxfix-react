import React from 'react';

const FactItem = ({item}) => {
    return (
        <div className="fact__item">
            {item?.year && <div className="fact__year">{item?.year}</div>}
            {item?.number && <div className="fact__number">{item?.number}</div>}
            <div className="fact__title">{item?.title}</div>
            <div className="fact__subtitle">{item?.subtitle}</div>

            <div className={item.type === "avatar" ? "fact__avatars" : "fact__icons"}>
                {item?.avatars?.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={item?.type}
                    className={item?.type === "avatar" ? "fact__avatar" : "fact__icon"}
                />
                ))}
            </div>
        </div>
    );
};

export default FactItem;