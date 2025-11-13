import React from "react";
import scss from "./MoreDetailed.module.scss";
import qr from "../../assets/qr.svg";
import phone from "../../assets/phone.svg";
import { detailArr, instArr } from "../../constants/Main";
import frame from "../../assets/frame.svg";
import { useLocation } from "react-router";

function MoreDetailed() {
  const location = useLocation();
  const type = location.state?.type || "credit";

  const isCredit = type === "credit";

  const infoCards = detailArr.map((el) => (
    <div key={el.id} className={scss.info}>
      <div className={scss.head}>
        <img src={frame} alt="image" />
        {el.title}
      </div>
      <p>{el.description}</p>
    </div>
  ));

  const instructions = instArr.map((el, index) => (
    <div key={index} className={scss.card}>
      <img src={el.img} alt="image" />
      <div>
        <p className={scss.step}>{el.step}</p>
        <p className={scss.desc}>{el.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className={scss.content}>
        <div className={scss.banner}>
          <article>
            <h2> {isCredit ? "Онлайн кредит" : "Онлайн депозит"}</h2>
            <p>
              {" "}
              {isCredit
                ? "Онлайн-кредит в приложении “KBank”. Быстрое оформление и 24/7."
                : "Онлайн-депозит в приложении “KBank”. Удобное управление и выгодные ставки."}
            </p>
            <div>
              <img src={qr} alt="QR" />
              <p>Отсканируйте QR, чтобы скачать приложение</p>
            </div>
          </article>
          <div className={scss.image}>
            <img src={phone} alt="image" />
          </div>
        </div>
        <div className={scss.infoCards}>{infoCards}</div>
        <div className={scss.instruction}>
          <h2>Как получить {isCredit ? "кредит" : "депозит"} в приложении?</h2>
          <div className={scss.main}>{instructions}</div>
        </div>
      </div>
    </div>
  );
}

export default MoreDetailed;
