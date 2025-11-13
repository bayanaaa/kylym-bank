import ru from "../assets/ru.svg";
import usd from "../assets/usd.svg";
import eur from "../assets/eur.svg";
import kzt from "../assets/kzt.svg";
import newImg from "../assets/newimg.jpg";
import whats from "../assets/whablack.svg";
import tg from "../assets/tgblack.svg";
import inst from "../assets/instblack.svg";
import tt from "../assets/ttblack.svg";
import card from "../assets/card.svg";
import card2 from "../assets/card2.svg";
import mbank from '../assets/mbank.svg'

export const arr = [
  { img: ru, title: "RUB", sell: "0.9950", buy: "87.8000", nbkr: "87.3000" },
  { img: eur, title: "EUR", sell: "0.9950", buy: "87.8000", nbkr: "87.3000" },
  { img: usd, title: "USD", sell: "0.9950", buy: "87.8000", nbkr: "87.3000" },
  { img: kzt, title: "KZT", sell: "0.9950", buy: "87.8000", nbkr: "87.3000" },
];

export const arr2 = [
  {
    heading: "Для операций с наличными",
    info: [
      {
        img: ru,
        title: "RUB",
        sell: "0.9950",
        buy: "87.8000",
        nbkr: "87.3000",
      },
      {
        img: eur,
        title: "EUR",
        sell: "0.9950",
        buy: "87.8000",
        nbkr: "87.3000",
      },
      {
        img: usd,
        title: "USD",
        sell: "0.9950",
        buy: "87.8000",
        nbkr: "87.3000",
      },
      {
        img: kzt,
        title: "KZT",
        sell: "0.9950",
        buy: "87.8000",
        nbkr: "87.3000",
      },
    ],
  },
  {
    heading: "Для операций с наличными",
    info: [
      {
        img: ru,
        title: "RUB",
        sell: "0.9950",
        buy: "87.8000",
        nbkr: "87.3000",
      },
      {
        img: eur,
        title: "EUR",
        sell: "0.9950",
        buy: "87.8000",
        nbkr: "87.3000",
      },
      {
        img: usd,
        title: "USD",
        sell: "0.9950",
        buy: "87.8000",
        nbkr: "87.3000",
      },
      {
        img: kzt,
        title: "KZT",
        sell: "0.9950",
        buy: "87.8000",
        nbkr: "87.3000",
      },
    ],
  },
];

export const arrGold = [
  { weight: "87.3000", buy: "87.3000", sell: "87.3000" },
  { weight: "101.0000", buy: "101.0000", sell: "101.0000" },
  { weight: "1.0650", buy: "1.0650", sell: "1.0650" },
];

export const newsArr = [
  {
    img: newImg,
    title: "Как устроена программа долгосрочных сбережений",
    desc: "И какой доход можно получить  с ее помощью",
    date: "24-января  2025",
  },
  {
    img: newImg,
    title: "Как устроена программа долгосрочных сбережений",
    desc: "И какой доход можно получить  с ее помощью",
    date: "24-января  2025",
  },
  {
    img: newImg,
    title: "Как устроена программа долгосрочных сбережений",
    desc: "И какой доход можно получить  с ее помощью",
    date: "24-января  2025",
  },
  {
    img: newImg,
    title: "Как устроена программа долгосрочных сбережений",
    desc: "И какой доход можно получить  с ее помощью",
    date: "24-января  2025",
  },
];

export const socials2 = [
  { img: whats, link: "#" },
  { img: tg, link: "#" },
  { img: inst, link: "#" },
  { img: tt, link: "#" },
];

const creditArr = [
  {
    type: "",
    desc: "",
    timeline: "",
  },
];

export const cardArr = [
  {
    name: "Премиальная карта",
    img: card,
    link: '/card-application',
    type: "Карта KBANK Premium",
    desc: "Пользуйтесь картой в 7 странах мира. Получайте привелегии в банке, дома и в поездках",
    info: [
      {
        id: "1",
        title: "Кэшбэк от банка",
        desc: "До 60 000сом/мес",
      },
      {
        id: "2",
        title: "Обналичивание",
        desc: "Бесплатное 0%",
      },
      {
        id: "3",
        title: "Обслуживание",
        desc: "0 сом",
      },
    ],
  },
  {
    name: "Премиальная карта",
    img: card2,
    type: "Карта KBANK Premium",link: '/card-application',
    desc: "Пользуйтесь картой в 7 странах мира. Получайте привелегии в банке, дома и в поездках",
    info: [
      {
        id: "1",
        title: "Кэшбэк от банка",
        desc: "До 60 000сом/мес",
      },
      {
        id: "2",
        title: "Обналичивание",
        desc: "Бесплатное 0%",
      },
      {
        id: "3",
        title: "Обслуживание",
        desc: "0 сом",
      },
    ],
  },
  {
    name: "Премиальная карта",
    img: card,link: '/card-application',
    type: "Карта KBANK Premium",
    desc: "Пользуйтесь картой в 7 странах мира. Получайте привелегии в банке, дома и в поездках",
    info: [
      {
        id: "1",
        title: "Кэшбэк от банка",
        desc: "До 60 000сом/мес",
      },
      {
        id: "2",
        title: "Обналичивание",
        desc: "Бесплатное 0%",
      },
      {
        id: "3",
        title: "Обслуживание",
        desc: "0 сом",
      },
    ],
  },
];

export const tariffArr = [
  {
    title: "Тарифы по картам KBANK Premium",
    id: "",
  },
  {
    title: "Тарифы по картам KBANK Premium",
    id: "",
  },
  {
    title: "Тарифы по картам KBANK Premium",
    id: "",
  },
  {
    title: "Тарифы по картам KBANK Premium",
    id: "",
  },
  {
    title: "Тарифы по картам KBANK Premium",
    id: "",
  },
  {
    title: "Тарифы по картам KBANK Premium",
    id: "",
  },
];

export const transferArr = [
  {
    img: mbank,
    title: "Mbank",
    desc: "Удобный сервис для оправки денег",
    info: [
      {
        id: 1,
        head: "Охват",
        text: "70+ стран, 20 000 пунктов",
      },
      {
        id: 2,
        head: "Валюта",
        text: "USD, RUB, KGS",
      },
    ],
  },
  {
    img: mbank,
    title: "Mbank",
    desc: "Удобный сервис для оправки денег",
    info: [
      {
        id: 1,
        head: "Охват",
        text: "70+ стран, 20 000 пунктов",
      },
      {
        id: 2,
        head: "Валюта",
        text: "USD, RUB, KGS",
      },
    ],
  },
  {
    img: mbank,
    title: "Mbank",
    desc: "Удобный сервис для оправки денег",
    info: [
      {
        id: 1,
        head: "Охват",
        text: "70+ стран, 20 000 пунктов",
      },
      {
        id: 2,
        head: "Валюта",
        text: "USD, RUB, KGS",
      },
    ],
  },
  {
    img: mbank,
    title: "Mbank",
    desc: "Удобный сервис для оправки денег",
    info: [
      {
        id: 1,
        head: "Охват",
        text: "70+ стран, 20 000 пунктов",
      },
      {
        id: 2,
        head: "Валюта",
        text: "USD, RUB, KGS",
      },
    ],
  },
  {
    img: mbank,
    title: "Mbank",
    desc: "Удобный сервис для оправки денег",
    info: [
      {
        id: 1,
        head: "Охват",
        text: "70+ стран, 20 000 пунктов",
      },
      {
        id: 2,
        head: "Валюта",
        text: "USD, RUB, KGS",
      },
    ],
  },
  {
    img: mbank,
    title: "Mbank",
    desc: "Удобный сервис для оправки денег",
    info: [
      {
        id: 1,
        head: "Охват",
        text: "70+ стран, 20 000 пунктов",
      },
      {
        id: 2,
        head: "Валюта",
        text: "USD, RUB, KGS",
      },
    ],
  },
];
