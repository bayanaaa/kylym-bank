import React from "react";
import scss from "./MobileApp.module.scss";
import android from "../../assets/android.svg";
import ios from "../../assets/ios.svg";
import mobile from "../../assets/mobile.svg";
import qr from "../../assets/qr.svg";
import { useLocation } from "react-router";

function MobileApp({ heading, title }) {
  const { pathname } = useLocation();

  return (
    <div className={`${scss.parent} ${pathname !== "/" ? scss.parent2 : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <article>
            <h2>{heading}</h2>
            <p>{title}</p>
            <div className={scss.download}>
              <a href="#">
                <img src={android} alt="Android" />
              </a>
              <a href="#">
                <img src={ios} alt="ios" />
              </a>
            </div>
          </article>
          <div className={scss.image}>
            <img src={mobile} alt="image" />
            <img src={qr} alt="image" className={scss.qr} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
