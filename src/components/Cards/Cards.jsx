import React from "react";
import scss from "./Cards.module.scss";
import cardsi from "../../assets/cardsi.svg";
import { Link } from "react-router";
import card from "../../assets/card.svg";

function Cards({ name, type, desc, info, img, link }) {
  return (
    <div className={scss.card}>
      <article>
        <div className={scss.name}>
          <img src={cardsi} alt="image" />
          {name}
        </div>
        <h3>{type}</h3>
        <p className={scss.desc}>
          {desc}
        </p>
        <div className={scss.info}>
          {info.map((el) => (
            <div className={scss.block} key={el.id}>
              <p className={scss.heading}>{el.title}</p>
              <p className={scss.desc}>{el.desc}</p>
            </div>
          ))}
        </div>
        <Link to={link} className={scss.btn}>
          Оформить заявку
        </Link>
      </article>
      <div className={scss.image} >
        <img src={img} alt="image" />
      </div>
    </div>
  );
}

export default Cards;
