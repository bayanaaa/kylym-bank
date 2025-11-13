import React, { useState } from "react";
import scss from "./Explanation.module.scss";
import { Link } from "react-router";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import photo from "../../assets/photo.svg";
import photo2 from "../../assets/photo2.svg";
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon2.svg";
import frame from "../../assets/frame.svg";
import { infoArr } from "../../constants/Main";

function Explanation() {
  const [selected, setSelected] = useState("Online");

  const info = infoArr.map((item) => (
    <div key={item.id} className={scss.card}>
      <div className={scss.head}>
        <img src={frame} alt="" /> <h2>{item.title}</h2>
      </div>{" "}
      <p className={scss.desc}>{item.desc}</p>
      <h3>{item.title2}</h3>
      {item.desc2 && <p className={scss.desc}>{item.desc2}</p>}
      {item.list && (
        <ul>
          {item.list.map((li, j) => (
            <li key={j} className={scss.desc}>{li}</li>
          ))}
        </ul>
      )}
      {item.note && <p>{item.note}</p>}
      {item.subBlock && (
        <>
          <h3>{item.subBlock.title}</h3>
          <ul>
            {item.subBlock.list.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  ));

  return (
    <>
      <div className={scss.wrapper}>
        <div className={scss.head}>
          <div
            onClick={() => setSelected("Online")}
            className={selected === "Online" ? scss.selected : ""}
          >
            Через приложение
          </div>
          <div
            onClick={() => setSelected("Bank")}
            className={selected === "Bank" ? scss.selected : ""}
          >
            В отделении банка
          </div>
        </div>
        {selected === "Online" && (
          <div className={scss.main}>
            <article>
              <h3>Оформите кредит за 5 минут без визита в офис</h3>
              <div className={scss.textWrapper}>
                <div className={scss.text}>
                  1. <p>Зайдите в приложение «KBANK», раздел «Оформить»</p>
                </div>
                <div className={scss.text}>
                  2. <p>Выберите «Кредит наличными»</p>
                </div>
                <div className={scss.text}>
                  3.{" "}
                  <p>
                    Заполните заявку, мы рассмотрим ее и пришлем решение в СМС
                  </p>
                </div>
              </div>
              <div className={scss.bottom}>
                <Link to={"/more-detailed"} className={scss.link}>
                  Подробнее
                </Link>
                <div>
                  <MdOutlineQrCodeScanner />
                </div>
                <div>
                  <FaApple />
                </div>
                <div>
                  <IoLogoGooglePlaystore />
                </div>
              </div>
            </article>
            <div className={scss.img}>
              <img src={photo} alt="image" />
            </div>
          </div>
        )}
        {selected === "Bank" && (
          <div className={scss.main}>
            <article>
              <h3>
                Оформить кредит можно в любом удобном для вас отделении банка
              </h3>
              <div className={scss.textWrapper}>
                <div className={scss.text}>
                  <img src={icon} alt="icon" />
                  <p style={{ paddingLeft: "10px" }}>
                    Наш менеджер поможет в оформлении договора и ответит на все
                    вопросы.
                  </p>
                </div>
                <div className={scss.text}>
                  <img src={icon2} alt="icon" />
                  <p style={{ paddingLeft: "10px" }}>
                    Для оформления карты вам понадобится паспорт РФ.
                  </p>
                </div>
              </div>
              <div className={scss.bottom}>
                <Link to={"/credit-application"} className={scss.link}>
                  Оформить заявку
                </Link>
              </div>
            </article>
            <div className={scss.img}>
              <img src={photo2} alt="image" />
            </div>
          </div>
        )}
      </div>
      <div className={scss.info_block}>{info}</div>
    </>
  );
}

export default Explanation;
