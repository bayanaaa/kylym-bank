import React, { useState } from "react";
import scss from "../Deposit.module.scss";
import { Link } from "react-router";
import illust from "../../../assets/illust2.svg";
import arrow from "../../../assets/arrow3.svg";
import Cards from "../../Cards/Cards";
import { depArr3 } from "../../../constants/Main";

const arr = ["СОМ", "USD", "KZT", "RUB", "RUB"];

function ExpressDeposit() {
  const [selected, setSelected] = useState("СОМ");

  const currencies = arr.map((el, index) => (
    <p
      key={index}
      className={`${scss.currency} ${selected === el ? scss.selected : ""}`}
      onClick={() => setSelected(el)}
    >
      {el}
    </p>
  ));

  const cards = depArr3.map((el) => <Cards {...el} />);

  return (
    <div className={scss.parent}>
     
      <>
        <div className="container">
          <div className={scss.content}>
            <h2>Рассчитайте депозит</h2>
            <div className={scss.box}>
              <div className={scss.chil1}>
                <div className={scss.currencies}>{currencies}</div>
                <form action="">
                  <div className={scss.input_block}>
                    <input type="text" placeholder="Копилка-плюс" />
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className={scss.input_block2}>
                    <label htmlFor="">Сумма депозита</label>
                    <input type="text" placeholder="1000" />
                  </div>
                  <div className={scss.input_block}>
                    <input type="text" placeholder="12 мес. / 13%" />
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className={scss.bottom}>
                    <div className={scss.checks}>
                      <input type="checkbox" name="1" />
                      <label htmlFor="1">Пополнять ежемесячно</label>
                    </div>
                    <div className={scss.checks}>
                      <input type="checkbox" name="1" />
                      <label htmlFor="1">Переводит проценты на депозиты</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className={scss.child2}>
                <div>
                  Накопленные проценты за период <p>1440,19 с</p>
                </div>
                <div>
                  Сумма в конце срока <p>1130.00 с</p>
                </div>
                <Link to="/more-detailed"  state={{ type: "deposit" }} className={scss.link}>
                  Подробнее
                </Link>
              </div>
            </div>
            <div className={scss.main}>{cards}</div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ExpressDeposit;
