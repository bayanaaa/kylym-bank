import React from "react";
import scss from "./BankCard.module.scss";
import { cardArr } from "../../constants/Main";
import Cards from "../../components/Cards/Cards";

function BankCard() {
  const cards = cardArr.map((el, index) => <Cards {...el} />);
  return (
    <div className={scss.parent}>
      <div className="container">
        <div className={scss.content}>
          <h2>Карты</h2>
          <p className={scss.title}>
            Оплачивайте покупки картой K‑Банка и получайте выгодный кэшбэк
            рублями или бонусами за каждую покупку
          </p>
          <div className={scss.main}>{cards}</div>
        </div>
      </div>
    </div>
  );
}

export default BankCard;
