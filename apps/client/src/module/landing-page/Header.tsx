"use client";
import React, { useState, useEffect, useRef } from "react";
import { IconUserCircle, IconPointFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@src/module/system";
import { LandingRoute } from "@src/module/landing-page/route";

type Locale = "en" | "zh-cn";

const Header: React.FC = () => {
  const t = useTranslations();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const { currentLocale, loading, languageSwitcher } = useLanguage();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language: Locale) => {
    languageSwitcher({ path: LandingRoute.Root.Path, locale: language });
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <button
                className="header__btn"
                type="button"
                aria-label="Toggle navigation"
                onClick={toggleNav}
              >
                <span />
                <span />
                <span />
              </button>
              <a href="/" className="header__logo">
                <img src="/img/logo/logo_dark.png" alt="" />
              </a>
              <span className="header__tagline">{t("Shared.beequant")}</span>
              <ul
                className={`header__nav ${isNavOpen ? "header__nav--active" : ""}`}
                id="header__nav"
                ref={navRef}
              >
                <li>
                  <a href="#">{t("Landing.home")}</a>
                </li>
                <li>
                  <a href="#">{t("Landing.company")}</a>
                </li>
              </ul>
              <div className="header__language" ref={dropdownRef}>
                <div
                  className="dropdown-link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  {currentLocale === "en"
                    ? t("Landing.en")
                    : t("Landing.zh-cn")}
                  <IconPointFilled size={20} />
                </div>
                <ul
                  className={`dropdown-menu header__language-menu ${isDropdownOpen ? "show" : ""}`}
                >
                  <li onClick={() => handleLanguageChange("en")}>
                    {t("Landing.en")}
                  </li>
                  <li onClick={() => handleLanguageChange("zh-cn")}>
                    {t("Landing.zh-cn")}
                  </li>
                </ul>
              </div>
              <a href="/login" className="header__profile flex gap-1">
                <IconUserCircle size={20} color="rgb(216,216,216)" />
                <span>{t("Shared.signIn")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
