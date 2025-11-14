import React from "react";
import Main from "../components/Main/Main";
import Products from "../components/Products/Products";
import MobileApp from "../components/MobileApp/MobileApp";
import Calculate from "../components/Calculate/Calculate";
import News from "../components/News/News";

function HomePage() {
  return (
    <>
      <Main />
      <Products />
      <MobileApp
        title={
          "Проверяйте баланс, оплачивайте услуги, получайте помощь в чате 24/7"
        }
        heading={"Мобильное приложение K-Bank"}
      />
      <Calculate />
      <News />
    </>
  );
}

export default HomePage;
