import React, { useEffect, useRef, useState } from "react";
import scss from "./Header.module.scss";
import { headerArr } from "../../constants/Header";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { Squash as Hamburger } from "hamburger-react";
import down from "../../assets/arrow.svg";
import arrow from "../../assets/arrow2.svg";

const langs = [
  { title: "Русский", code: "ru" },
  { title: "Кыргызча", code: "kg" },
  { title: "English", code: "en" },
];

function Header() {
  const { pathname } = useLocation();

  const [active, setActive] = useState("Главная");
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selected, setSelected] = useState(langs[0]);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [burgerLangOpen, setBurgerLangOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const searchRef = useRef(null);
  const langRef = useRef(null);
  const burgerSearchRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (burgerRef.current && !burgerRef.current.contains(e.target)) {
        setBurgerOpen(false);
      }
    }
    if (burgerOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [burgerOpen]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    if (langOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  const topNavs = headerArr.upper.map((el, index) => (
    <Link
      to={el.link}
      key={index}
      className={scss.link}
      onClick={() => {
        setBurgerOpen(false), setCatOpen(false);
      }}
    >
      {el.title}
    </Link>
  ));

  const mainNavs = headerArr.main.map((el, index) => {
    const hasMenu = el.menu && el.menu.length > 0;
    return (
      <div
        key={index}
        className={scss.navItem}
        onMouseEnter={() => hasMenu && setHoverMenu(el.title)}
        onMouseLeave={() => hasMenu && setHoverMenu(null)}
      >
        <Link
          to={el.link}
          className={`${scss.link2} ${
            el.title === active || pathname === el.link ? scss.active : ""
          }`}
          onClick={() => setActive(el.title)}
        >
          {el.title}
        </Link>
        {hasMenu && hoverMenu === el.title && (
          <div className={scss.dropdown}>
            {el.menu.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                onClick={() => {
                  setHoverMenu(null), setActive(item.text);
                }}
                className={`${scss.dropdownItem} ${
                  active === el.text ? scss.active2 : ""
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className={scss.parent}>
      <div className="container">
        <div className={scss.content}>
          <nav className={scss.topNavs}>{topNavs}</nav>

          <Link to="/" className={scss.logo}>
            <img src={logo} alt="Logo" />
          </Link>

          <div className={scss.burger} onClick={() => setBurgerOpen(true)}>
            <Hamburger size={25} toggled={burgerOpen} />
          </div>

          <div className={scss.main}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>

            <nav className={scss.mainNavs}>{mainNavs}</nav>

            <aside>
              <div className={scss.block} onClick={() => setSearchOpen(true)}>
                <IoIosSearch color="#B1B1B1" size={22} />
              </div>
              <div
                className={scss.block}
                onClick={() => setLangOpen(!langOpen)}
              >
                <p>{selected.code.toUpperCase()}</p>
              </div>
            </aside>

            {searchOpen && (
              <div className={scss.searchBar} ref={searchRef}>
                <IoIosSearch size={22} color="#B1B1B1" />
                <input type="text" placeholder="Поиск" />
              </div>
            )}

            {langOpen && (
              <div className={scss.langBar} ref={langRef}>
                {langs.map((el, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelected(el);
                      setLangOpen(false);
                    }}
                    className={`${scss.lang} ${
                      selected.title === el.title ? scss.selected : ""
                    }`}
                  >
                    <p>{el.title}</p>
                    {selected.code === el.code && <IoMdCheckmark size={18} />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {burgerOpen && (
            <div className={`${scss.overlay} ${scss.open}`}>
              <div
                className={`${scss.burgerMenu} ${scss.open}`}
                ref={burgerRef}
              >
                <div className={scss.burgerHeader}>
                  <Link to="/" onClick={() => setBurgerOpen(false)}>
                    <img src={logo} alt="Logo" />
                  </Link>
                  <p onClick={() => setBurgerOpen(false)}>
                    <IoMdClose size={28} />
                  </p>
                </div>

                <aside>
                  <div className={scss.searchBar} ref={burgerSearchRef}>
                    <IoIosSearch size={22} color="#B1B1B1" />
                    <input type="text" placeholder="Поиск" />
                  </div>
                  <div
                    className={scss.block}
                    onClick={() => setBurgerLangOpen(!burgerLangOpen)}
                  >
                    <p>{selected.code.toUpperCase()}</p>
                  </div>
                  {langOpen && (
                    <div className={scss.langBar} ref={langRef}>
                      {langs.map((el, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelected(el);
                            setLangOpen(false);
                          }}
                          className={`${scss.lang} ${
                            selected.title === el.title ? scss.selected : ""
                          }`}
                        >
                          <p>{el.title}</p>
                          {selected.code === el.code && (
                            <IoMdCheckmark size={18} />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {burgerLangOpen && (
                    <div className={scss.langBar}>
                      {langs.map((el, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelected(el);
                            setBurgerLangOpen(false);
                          }}
                          className={`${scss.lang} ${
                            selected.title === el.title ? scss.selected : ""
                          }`}
                        >
                          <p>{el.title}</p>
                          {selected.code === el.code && (
                            <IoMdCheckmark size={18} />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </aside>

                <div className={scss.category}>
                  <div
                    className={scss.catItem}
                    onClick={() => setCatOpen(!catOpen)}
                  >
                    <p>Физическим лицам</p>
                    <img
                      src={down}
                      className={catOpen ? scss.rotated : ""}
                      alt="arrow down"
                    />
                  </div>
                  {catOpen && <div className={scss.mobNav1}>{topNavs}</div>}
                </div>

                <div className={scss.mobNav2}>
                  {headerArr.main.map((el, index) => (
                    <div className={scss.text} key={index}>
                      {el.show && (
                        <img
                          src={arrow}
                          alt="arrow"
                          className={openMenu === el.title ? scss.rotated : ""}
                        />
                      )}
                      {el.link ? (
                        <Link
                          to={el.link}
                          className={`${scss.link2} ${
                            el.title === active || pathname === el.link
                              ? scss.active
                              : ""
                          }`}
                          onClick={() => {
                            setActive(el.title);
                            setBurgerOpen(false);
                          }}
                        >
                          {el.title}
                        </Link>
                      ) : (
                        <div className={scss.wrap}>
                          <div
                            className={`${scss.link2} ${
                              el.title === active || pathname === el.link
                                ? scss.active
                                : ""
                            }`}
                            onClick={() => setOpenMenu(el.title)}
                          >
                            {el.title}
                          </div>
                          {openMenu === el.title && (
                            <div className={scss.menu}>
                              {el.menu?.map((el, index) => (
                                <Link
                                  to={el.link}
                                  onClick={() => {
                                    setBurgerOpen(false), setActive(el.text);
                                  }}
                                  key={index}
                                  className={`${scss.text} ${
                                    el.text === active || pathname === el.link
                                      ? scss.active
                                      : ""
                                  }`}
                                >
                                  {el.text}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
