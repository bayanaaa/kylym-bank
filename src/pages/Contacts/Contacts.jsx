import React from "react";
import scss from "./Contacts.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { socials2 } from "../../constants/Main";

function Contacts() {
  const socials = socials2.map(({ img, link }, index) => (
    <a href={link} key={index} className={scss.media}>
      <img src={img} alt={`${img} logo`} />
    </a>
  ));
  return (
    <div className="container">
      <div className={scss.content}>
        <h1>Круглосуточный контакт-центр:</h1>
        <div className={scss.main}>
          <div className={scss.block}>
            <p className={scss.heading}>Головной офис:</p>
            <p className={scss.desc}>
              Кыргызстан г. Бишкек, пер. Геологический-17
            </p>
          </div>
          <div className={scss.block}>
            <p className={scss.heading}>График работы:</p>
            <p className={scss.desc}>Пн-Пт с 8.30-16.30 ч., без перерыва</p>
          </div>
          <div className={`${scss.block} d-flex gap-3`}>
            <p className={scss.icon}>
              <FaPhoneAlt color="#121212" />
            </p>
            <article>
              <p className={scss.heading}>Телефон:</p>
              <div className={scss.desc}>
                +996 553 900 800 <br />
                +996 553 900 800
              </div>
            </article>
          </div>
          <div className={`${scss.block} d-flex gap-3`}>
            <p className={scss.icon}>
              <GrMail color="#121212" size={20} />
            </p>
            <article>
              <p className={scss.heading}>E-mail:</p>
              <div className={scss.desc}>office@ecoislamicbank.kg</div>
            </article>
          </div>
          <div className={scss.block}>
            <p className={scss.heading}>Мы в соцсетях</p>
            <div className={scss.socials}>{socials}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
