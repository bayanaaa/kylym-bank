import React from "react";
import scss from "./News.module.scss";
import { newsArr } from "../../constants/Main";

function News() {
  const cards = newsArr.map(({ img, title, desc, date }, index) => (
    <div key={index} className={scss.news_card}>
      <div
        className={scss.image}
        style={{
          background: `url(${img})  no-repeat`,
          backgroundSize: "cover",
        }}
      ></div>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className={scss.bottom}>
          <p>Читать</p>
          <p>{date}</p>
        </div>
      </article>
    </div>
  ));

  return (
    <div className="container">
      <div className={scss.content}>
        <h1>Новости</h1>
        <div className={scss.main}>{cards}</div>
       <div className={scss.btnWrapper}>
         <a href="/news" className={`${scss.btn}`}>Все новости</a>
       </div>
      </div>
    </div>
  );
}

export default News;
