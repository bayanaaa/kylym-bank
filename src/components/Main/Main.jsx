import React, { useState, useEffect, useRef } from "react";
import scss from "./Main.module.scss";
import main from "../../assets/main.svg";
import mainRel from "../../assets/mainRel.svg";
import posImg from "../../assets/mainPos.svg";

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 2;
  const autoPlayRef = useRef(null);

  const slides = [
    {
      title: "От 0,25% на любой перевод для бизнеса",
      text: "Отправляйте деньги в Китай и другие страны, получайте оплату от зарубежных партнеров",
      img: main,
      anim: false,
    },
    {
      title: "От 0,25% на любой перевод для бизнеса",
      text: "Отправляйте деньги в Китай и другие страны, получайте оплату от зарубежных партнеров",
      img: mainRel,
      anim: true,
    },
  ];

    useEffect(() => {
      const startAutoPlay = () => {
        autoPlayRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slideCount);
        }, 4000);
      };

      startAutoPlay();

      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [slideCount]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideCount);
      }, 4000);
    }
  };

  return (
    <div className={scss.parent}>
      <div className="container">
        <div className={scss.slider}>
          <div
            className={scss.slides}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className={scss.block}>
                <article>
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <a href="#" className={scss.more}>
                    Подробнее
                  </a>
                  <div className={scss.location}>
                    {slides.map((_, dotIndex) => (
                      <p
                        key={dotIndex}
                        className={`${scss.dot} ${
                          currentSlide === dotIndex ? scss.active : ""
                        }`}
                        onClick={() => goToSlide(dotIndex)}
                      ></p>
                    ))}
                  </div>
                </article>
                <div className={scss.image}>
                  <img src={slide.img} alt="image" className={scss.relImg} />
                  {slide.anim === true && (
                    <img src={posImg} className={scss.posImg} alt="image" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
