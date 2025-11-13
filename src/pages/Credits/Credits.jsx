import React from "react";
import scss from "./Credits.module.scss";
import MobileApp from "../../components/MobileApp/MobileApp";

function Credits() {
  return (
    <>
      <MobileApp
        heading={"Быстрый онлайн кредит"}
        title={
          "Оформляйте заём через наше приложение — быстро, удобно и безопасно."
        }
      />
      <div className={scss.parent}>
        <div className="container">
            <div className={scss.content}>
                
            </div>
        </div>
      </div>
    </>
  );
}

export default Credits;
