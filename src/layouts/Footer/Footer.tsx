import { LuGithub, LuTwitter, LuYoutube } from "react-icons/lu";
import styles from "./Footer.module.css";
import Logo from "../../components/Logo/Logo";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  const content = {
    paragraph: t("paragraph"),
    copyright: t("copyright"),
  };
  return (
    <>
      <Logo />
      <footer className={styles.footer}>
        <section className={styles.contentContainer}>
          <div>
            <p>{content.paragraph}</p>
          </div>

          <div className={`${styles.socialMedia}`}>
            <a href="https://x.com/class_lambda/">
              <LuTwitter className={styles.icon} />
            </a>

            <a href="https://github.com/lambdaclass/">
              <LuGithub className={styles.icon} />
            </a>

            <a href="https://www.youtube.com/@lambdaclass">
              <LuYoutube className={styles.icon} />
            </a>
          </div>
        </section>
        <section className={styles.copyrightContainer}>
          <small>LAMBDA - {content.copyright}</small>
        </section>
      </footer>
    </>
  );
}
