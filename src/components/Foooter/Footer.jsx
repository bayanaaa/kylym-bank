import React from "react";
import scss from "./Footer.module.scss";
import { footerArr, socialArr } from "../../constants/Footer";

function Footer() {
  const navContent = footerArr.map(({ heading, info }, index) => (
    <div key={index} className={scss.navContent}>
      <h2>{heading}</h2>
      <nav>
        {info.map(({ title, link }, index) => (
          <a href={link} key={index}>
            {title}
          </a>
        ))}
      </nav>
    </div>
  ));

  const socials = socialArr.map(({ img, link }, index) => (
    <a href={link} key={index}>
      <img src={img} alt="logo" />
    </a>
  ));

  return (
    <div className={scss.parent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block1}>{navContent}</div>
          <div className={scss.block2}>
            <p>Мы в соцсетях</p>
            <div className={scss.socials}>{socials}</div>
            <div className={scss.address}>
              <p>Головной офис</p>
              <p className={scss.text}>
                Кыргызстан г. Бишкек, пер. <br />
                Геологический-17
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
