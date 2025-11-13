import React from "react";
import scss from "./Rates.module.scss";
import { arr2, arrGold } from "../../constants/Main";
import arrow from "../../assets/arrow.svg";

function Rates() {
  const blocks = arr2.map(({ heading, info }, index) => (
    <div key={index} className={scss.block}>
      <h2>{heading}</h2>
      <div className={scss.box}>
        <div className={scss.titles}>
          <p>валюта</p>
          <p>покупка</p>
          <p>продажа</p>
          <p>НБКР</p>
        </div>
        {info.map((el, index) => (
          <div key={index} className={scss.child}>
            <div className={scss.currency}>
              <img src={el.img} alt="flag" />
              <span>{el.title}</span>
            </div>
            <p>{el.buy}</p>
            <p>{el.buy}</p>
            <p>{el.nbkr}</p>
          </div>
        ))}
      </div>
    </div>
  ));

  const goldInfo = arrGold.map((el, index) => (
    <div className={scss.line} key={index}>
      {" "}
      <p>{el.weight}</p> <p>{el.buy}</p>
      <p>{el.sell}</p>
    </div>
  ));

  return (
    <div className="container">
      <div className={scss.content}>
        <div className={scss.search}>
          <h1>Курсы</h1>
          <div className={scss.input_block}>
            <input
              type="text"
              placeholder="ФИЛИАЛ 'КБАНК ПРЕМИУМ' ОАО 'КБАНК'"
            />{" "}
            <img src={arrow} alt="open" />
          </div>
        </div>
        <div className={scss.section}>
          <h2>Ставки наличных</h2>
          <div className={scss.main}>{blocks}</div>
        </div>
        <div className={scss.section}>
          <h2>Ставки наличных</h2>
          <div className={scss.main}>{blocks}</div>
        </div>
        <div className={scss.section}>
          <h2>Золото</h2>
          <p className={scss.desc} >Для операций с наличными</p>
          <div className={`${scss.titles} ${scss.titles2}`}>
            <p>валюта</p>
            <p>покупка</p>
            <p>продажа</p>
          </div>
          <div className={scss.goldInfo}>{goldInfo}</div>
        </div>
      </div>
    </div>
  );
}

export default Rates;
