import React from "react";
import scss from "./Transfers.module.scss";
import { transferArr } from "../../constants/Main";

function Transfers() {
  const cards = transferArr.map((el, index) => (
    <div key={index} className={scss.card}>
      <div className={scss.head}>
        <div className={scss.child}>
          <h3>{el.title}</h3>
          <p>{el.desc}</p>
        </div>
        <img src={el.img} alt="logo" />
      </div>
      <div className={scss.body}>
        {el.info.map((item) => (
          <div className={scss.box} key={item.id}>
            <p className={scss.heading}>{item.head}</p>
            <p className={scss.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className={scss.content}>
        <h2>Денежные переводы</h2>
        <p className={scss.title}>Переводы без открытия счёта</p>
        <div className={scss.main}>{cards}</div>
      </div>
    </div>
  );
}

export default Transfers;
