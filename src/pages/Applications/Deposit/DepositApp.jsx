import React from "react";
import scss from "../../Applications/Applications.module.scss";
import img from "../../../assets/arrow.svg";
import frame from "../../../assets/frame.svg";

function DepositApp() {
  return (
    <div className="container">
      <div className={scss.content}>
        <h2>Заявка на депозит</h2>
        <div className={scss.main2}>
          <form action="" className={scss.form2}>
            <div className={scss.input_block}>
              <label htmlFor="Сумма(сомах)">Сумма(сомах)</label>
              <input
                type="text"
                name="Сумма(сомах)"
                placeholder="550 000 с"
                required
              />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="Имя">Имя</label>
              <input type="text" name="Имя" placeholder="Имя" required />
            </div>
            <div className={scss.input_block2}>
              <div>
                <label htmlFor="Срок">Срок</label>
                <input type="text" name="Срок" placeholder="5 лет" required />
              </div>
              <img src={img} alt="arrow" />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="Фамилия">Фамилия</label>
              <input
                type="text"
                name="Фамилия"
                placeholder="Фамилия"
                required
              />
            </div>
            <div className={scss.input_block2}>
              <div>
                <label htmlFor="Цель депозит">Цель депозит</label>
                <input
                  type="text"
                  name="Цель депозит"
                  placeholder="Цель депозит"
                  required
                />
              </div>
              <img src={img} alt="arrow" />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="Электронная почта">Электронная почта</label>
              <input
                type="text"
                name="Электронная почта"
                placeholder="user@gmail.com"
                required
              />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="Номер телефона">Номер телефона</label>
              <input
                type="text"
                name=""
                placeholder="+996 (700) 700 - 700"
                required
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
          <div className={scss.section}>
            <div className={scss.block}>
              <div className={scss.head}>
                <img src={frame} alt="image" />
                <p>Период охлаждения</p>
              </div>
              <p>
                С 14 декабря 2024 года вводится «период охлаждения» для
                онлайн-кредитов по требованию НБ КР.
              </p>
            </div>
            <div className={scss.block}>
              <div className={scss.head}>
                <img src={frame} alt="image" />
                <p>Целевое использование кредита</p>
              </div>
              <p className={scss.text}>
                После одобрения кредитные средства зачисляются на специальный
                кредитный счёт. Их можно использовать без комиссии для покупки
                товаров и услуг по QR{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositApp;
