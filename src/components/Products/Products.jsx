import React from "react";
import scss from "./Products.module.scss";
import prod1 from "../../assets/prod1.svg";
import prod2 from "../../assets/prod2.svg";
import prod3 from "../../assets/prod3.svg";
import prod4 from "../../assets/prod4.svg";
import prod5 from "../../assets/prod5.svg";

const array = [
  {
    heading: "Карта с выгодой",
    desc: "Удобные условия для покупки и платежей, бонусы кэшбэки",
    img: prod1,
  },
  {
    heading: "Кредиты от 29,99%",
    desc: "Быстрое оформление и полная безопасность",
    img: prod2,
  },
  {
    heading: "Лучшие депозиты",
    desc: "Надежное сохрание и рост ваших средств с выгодням процентами",
    img: prod3,
  },
  {
    heading: "Сейфовые ячейки",
    desc: "Надёжное хранение ваших ценностей  в любое время",
    img: prod4,
  },
  {
    heading: "Выгодные тариф",
    desc: "Широкий выбор тарифов и условий чтобы выбрать оптимальный вариатн",
    img: prod5,
  },
];

function Products() {
  const cardsTop = array.slice(0, 2).map((el, index) => (
    <div key={index} className={scss.card}>
      <article>
        <h2>{el.heading}</h2>
        <p>{el.desc}</p>
      </article>
      <div>
        <img src={el.img} alt="image" />
      </div>
    </div>
  ));

  const cardsBottom = array.slice(2, 5).map((el, index) => (
    <div key={index} className={scss.card}>
      <article>
        <h2>{el.heading}</h2>
        <p>{el.desc}</p>
      </article>
      <div>
        <img src={el.img} alt="image" />
      </div>
    </div>
  ));

  return (
    <div className={scss.parent}>
      <div className="container">
        <div className={scss.content}>
          <h1>Топовые продукты</h1>
          <main className={scss.main}>
            <div className={scss.top}>{cardsTop}</div>
            <div className={scss.bottom}>{cardsBottom}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Products;
