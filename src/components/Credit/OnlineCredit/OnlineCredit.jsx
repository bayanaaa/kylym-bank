import React from "react";
import scss from "../Credit.module.scss";
import cardsi from "../../../assets/cardsi.svg";
import { Link } from "react-router";
import Explanation from "../../Explanation/Explanation";
import { creditArr4 } from "../../../constants/Main";
import Cards from "../../Cards/Cards";

function OnlineCredit() {
    const cards = creditArr4.map((el) => <Cards {...el}/>)
  return (
    <div className={scss.parent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.box1}>
            <div className={scss.section1}>
              <label htmlFor="Сумма кредита">Сумма кредита</label>
              <p>15000 сом</p>
              <input type="range" name="Сумма кредита" />
              <div className={scss.bottom}>
                <p>15 тыс.</p>
                <p>100 тыс.</p>
                <p>200 тыс.</p>
              </div>
            </div>
            <div className={scss.section1}>
              <label htmlFor="Срок кредита">Срок кредита</label>
              <p>12 месяцев</p>
              <input type="range" name="Срок кредита" />
              <div className={scss.bottom}>
                <p>3 мес.</p>
                <p>12 мес.</p>
                <p>24 мес.</p>
              </div>
            </div>
          </div>
          <div className={scss.box2}>
            <div className={scss.child}>
              <div className={scss.name}>
                <img src={cardsi} alt="image" />
                Без страховки
              </div>
              <div className={scss.text}>
                Ежемесячный плятеж<p>1440,19 с</p>
              </div>
              <div className={scss.text}>
                Общая сумма<p>17 276,23 с</p>
              </div>
              <div className={scss.text}>
                Валюта<p>Сом</p>
              </div>
              <Link to={"/credit-application"} className={scss.link}>
                Оформить заявку
              </Link>
            </div>
            <div className={scss.child}>
              <div className={scss.name}>
                <img src={cardsi} alt="image" />
                Со страхованием
              </div>
              <div className={scss.text}>
                Ежемесячный плятеж<p>1440,19 с</p>
              </div>
              <div className={scss.text}>
                Общая сумма<p>17 276,23 с</p>
              </div>
              <div className={scss.text}>
                Валюта<p>Сом</p>
              </div>
              <Link to={"/credit-application"} className={scss.link}>
                Оформить заявку
              </Link>
            </div>
          </div>
          <div className={scss.box3}>
            <h2>Выберите кредит под свою цель</h2>
            <div className={scss.main}>{cards}</div>
          </div>
          <div className={scss.box3}>
            <h2>Как оформить кредит?</h2>
            <Explanation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineCredit;
