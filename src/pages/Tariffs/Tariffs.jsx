import React from "react";
import scss from "./Tariffs.module.scss";
import { tariffArr } from "../../constants/Main";
import pdf from "../../assets/pdf.svg";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";

function Tariffs() {
  const cards = tariffArr.map((el) => (
    <div key={el.id} className={scss.card}>
      <div className={scss.block}>
        <img src={pdf} alt="pdf logo" /> <p>{el.title}</p>
      </div>{" "}
      <div className={scss.block}>
        <div>
          <p>
            <MdOutlineFileDownload />
          </p>
          Скачать
        </div>
        <div>
          <p>
            <IoEnterOutline />
          </p>
          Открыть
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className={scss.content}>
        <h2>Тарифы</h2>
        <p className={scss.title}>Широкий выбор тарифов и условий </p>
        <div className={scss.cards}>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default Tariffs;
