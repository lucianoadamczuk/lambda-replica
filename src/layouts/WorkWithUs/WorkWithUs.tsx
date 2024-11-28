import { useTranslation } from "react-i18next";
import styles from "./WorkWithUs.module.css";
export default function WorkWithUs() {
  const { t } = useTranslation("translation", { keyPrefix: "workWithUs" });
  const content = {
    title: t("title"),
    paragraph_1: t("paragraph_1"),
    paragraph_2: t("paragraph_2"),
    paragraph_3: t("paragraph_3"),
    paragraph_4: t("paragraph_4"),
    paragraph_4_span: t("paragraph_4_span"),
    paragraph_5: t("paragraph_5"),
    paragraph_5_span: t("paragraph_5_span"),
  };
  return (
    <section className={styles.section} id="workWithUs">
      <article>
        <h3 className="title" style={{ color: "var(--color-secondary)" }}>
          {content.title}
        </h3>
        <div className={styles.paragraphs}>
          <p>{content.paragraph_1}</p>

          <p>{content.paragraph_2}</p>

          <p>{content.paragraph_3}</p>
        </div>
      </article>

      <img src="/images/workWithUs.svg" alt="" />

      <article className={styles.linksContainer}>
        <div className={styles.box}>
          <p>
            {content.paragraph_4}{" "}
            <a
              href="https://github.com/lambdaclass/lambdaclass_hacking_learning_path"
              target="_blank"
            >
              {content.paragraph_4_span}
            </a>
          </p>
        </div>

        <div className={styles.box}>
          <p>
            {content.paragraph_5}{" "}
            <a href="mailto:hello@lambdaclass.com">
              {content.paragraph_5_span}
            </a>
            !
          </p>
        </div>
      </article>
    </section>
  );
}
