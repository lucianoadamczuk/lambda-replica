import { useState } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("translation");
  const content = {
    links: t("navbar", { ns: "translation", returnObjects: true }),
  };

  return (
    <nav className={styles.nav}>
      <h6>LAMBDA</h6>
      <div
        className={styles.linksContainer}
        style={{ opacity: isOpen ? 1 : 0, left: isOpen ? 0 : "100vw" }}
      >
        {content.links.map((link) => (
          <a href={link.path} key={link.path} onClick={() => setIsOpen(false)}>
            {link.text}
          </a>
        ))}
        <select
          className={styles.select}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value), setIsOpen(false);
          }}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  );
}
