import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
export default function Header() {
  const { t } = useTranslation("translation", { keyPrefix: "header" });
  const content = {
    title: t("title"),
    subtitle: t("subtitle"),
  };
  return (
    <header className={styles.header} id="home">
      <div className={styles.contentContainer}>
        <h1 className="title">
          {content.title} <span className={styles.span}>LAMBDA</span>
        </h1>
        <span className="subtitle"> {content.subtitle} </span>
      </div>

      <picture>
        <source
          className={styles.image}
          media="(min-width: 1024px)"
          srcSet="/images/header-desktop.png"
        />
        <img src="/images/header-mobile.png" alt="" className={styles.image} />
      </picture>
    </header>
  );
}
