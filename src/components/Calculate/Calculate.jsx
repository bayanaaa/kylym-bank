import React, { useState } from "react";
import scss from "./Calculate.module.scss";
import right from "../../assets/right.svg";

import { arr } from "../../constants/Main";

function Calculate() {
  const [selected, setSelected] = useState("Наличные");
  const [currency, setCurrency] = useState("СОМ");
  const [action , setAction] = useState('Купить')

  const info = arr.map((el, index) => (
    <div key={index} className={scss.child}>
      <div className={scss.currency}>
        <img src={el.img} alt="flag" />
        <span>{el.title}</span>
      </div>
      <p>{el.buy}</p>
      <p>{el.buy}</p>
      <p>{el.nbkr}</p>
    </div>
  ));

  return (
    <div className={scss.parent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <div className={scss.block_header}>
              <h2>Курсы валют</h2>
              <a href="/exchange-rates">
                все курсы
                <img src={right} alt="arrow" />
              </a>
            </div>
            <div className={scss.choose}>
              <p
                className={selected === "Наличные" ? scss.selected : ""}
                onClick={() => setSelected("Наличные")}
              >
                Наличные
              </p>
              <p
                className={selected === "Безналичные" ? scss.selected : ""}
                onClick={() => setSelected("Безналичные")}
              >
                Безналичные
              </p>
            </div>
            <div className={scss.main}>
              <div className={scss.titles}>
                <p>валюта</p>
                <p>покупка</p>
                <p>продажа</p>
                <p>НБКР</p>
              </div>
              <div className={scss.info}>{info}</div>
            </div>
          </div>
          <div className={scss.block}>
            <h2>Калькулятор</h2>
            <div className={scss.choose}>
              <p className={ action === 'Купить' && scss.selected} onClick={() => setAction('Купить')}>Купить</p>
              <p className={action === 'Продать' && scss.selected} onClick={() => setAction('Продать')}>Продать</p>
            </div>
            <div className={scss.currencies}>
              <p
                className={currency === "СОМ" ? scss.selected : ""}
                onClick={() => setCurrency("СОМ")}
              >
                СОМ
              </p>
              <p
                className={currency === "USD" ? scss.selected : ""}
                onClick={() => setCurrency("USD")}
              >
                USD
              </p>
              <p
                className={currency === "KZT" ? scss.selected : ""}
                onClick={() => setCurrency("KZT")}
              >
                KZT
              </p>
              <p
                className={currency === "RUB" ? scss.selected : ""}
                onClick={() => setCurrency("RUB")}
              >
                RUB
              </p>
              <p
                className={currency === "EUR" ? scss.selected : ""}
                onClick={() => setCurrency("EUR")}
              >
                EUR
              </p>
            </div>
            <div className={scss.input_block}>
              <label htmlFor="have">У меня есть</label>
              <input type="text" name="have" placeholder="0.00" />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="have">У меня есть</label>
              <input type="text" name="have" placeholder="0.00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
