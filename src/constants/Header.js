export const headerArr = {
  upper: [
    { title: "Физическим лицам", link: "/for-individuals" },
    { title: "Юридическим лицам", link: "/for-legal-entities" },
    { title: "Малому биснесу", link: "for-small-business" },
    { title: "Новости", link: "/news" },
    { title: "Контакты", link: "/contacts" },
    { title: "О банке", link: "/about" },
  ],
  main: [
    { title: "Главная", link: "/" },
    {
      title: "Кредиты",
      show: true,
      menu: [
        { text: "Все", link: "/all-credits" },
        { text: "Авто-кредит", link: "/auto-credit" },
        { text: "Онлайн-кредит", link: "/online-credit" },
        { text: "Экспресс", link: "/express-credit" },
      ],
    },
    { title: "Тарифы", link: "/tariffs" },
    {
      title: "Депозиты",
      show: true,
      menu: [
        { text: "Все", link: "/all-deposits" },
        { text: "Онлайн-депозит", link: "/online-deposit" },
        { text: "Экспресс", link: "/express-deposit" },
      ],
    },
    { title: "Карты", link: "/cards", show: true },
    { title: "Денежные переводы", link: "/transfers" },
    { title: "Еще", link: "/more", show: true },
  ],
};
