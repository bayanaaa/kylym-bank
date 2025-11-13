import React from "react";
import scss from "./Cards.module.scss";
import cardsi from "../../assets/cardsi.svg";
import { Link } from "react-router";
import card from "../../assets/card.svg";

function Cards({ name, type, desc, info, img, link, currencies, state }) {
  return (
    <div className={scss.card}>
      <article>
        {name && (
          <div className={scss.name}>
            <img src={cardsi} alt="image" />
            {name}
          </div>
        )}
        <h3>{type}</h3>
        <p className={scss.desc}>{desc}</p>
        <div className={scss.info}>
          {info.map((el) => (
            <div className={scss.block} key={el.id}>
              <p className={scss.heading}>{el.title}</p>
              <p className={scss.desc}>{el.desc}</p>
            </div>
          ))}
        </div>
        {currencies && (
          <div className={scss.currencies}>
            <p className={scss.heading}>Валюта</p>
            <p className={scss.text}>{currencies}</p>
          </div>
        )}
        <Link
          to={link}
          state={state ? { type: state } : undefined}
          className={scss.btn}
        >
          {link === "/more-detailed" ? "Подробнее" : "Оформить заявку"}
        </Link>
      </article>
      <div className={scss.image}>
        <img src={img} alt="image" />
      </div>
    </div>
  );
}

export default Cards;
