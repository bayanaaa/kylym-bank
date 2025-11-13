import React from "react";
import scss from "../../Applications/Applications.module.scss";
import down from "../../../assets/arrow.svg";

function CardApp() {
  return (
    <div className="container">
      <div className={scss.content}>
        <h2>Заявка на карту</h2>
        <div className={scss.main}>
          <form action="" className={scss.form}>
            <div className={scss.input_block}>
              <label htmlFor="Номер телефона">Номер телефона</label>
              <input
                type="text"
                required
                placeholder="Номер телефона"
                name="Номер телефона"
              />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="Имя">Имя</label>
              <input type="text" placeholder="Имя" name="Имя" required />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="Фамилия">Фамилия</label>
              <input
                type="text"
                placeholder="Фамилия"
                name="Фамилия"
                required
              />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="Электронная почта">Электронная почта</label>
              <input
                required
                type="email"
                placeholder="Электронная почта"
                name="Электронная почта"
              />
            </div>
            <div className={scss.bottom}>
              <button type="submit">Продолжить</button>
              <p>
                Нажимая “Продолжить”, вы соглашаетесь с{" "}
                <p>условиями передачи информации</p>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardApp;
