import React from "react";
import scss from "../Deposit.module.scss";
import { Link } from "react-router";
import illust from "../../../assets/illust2.svg";

function AllDeposits() {
  return (
    <div className={scss.parent}>
      <div className={scss.banner}>
        <article>
          <h2>Быстрый онлайн депозит</h2>
          <p>
            Получайте до 13% годовых в сомах, до 3% в долларах и до 1% в евро
          </p>
          <Link to="/" className={scss.link}>
            Подробнее
          </Link>
        </article>
        <img src={illust} alt="" />
      </div>
      <>
        <div className="container">
          <div className={scss.content}></div>
        </div>
      </>
    </div>
  );
}

export default AllDeposits;
