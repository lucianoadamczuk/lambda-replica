import { useInView } from "react-intersection-observer";
import styles from "./WhatWeDo.module.css";
import { useTranslation } from "react-i18next";

export default function WhatWeDo() {
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const { t } = useTranslation("translation", { keyPrefix: "whatWeDo" });
  const content = {
    title: t("title"),
    paragraph_1: t("paragraph_1"),
    paragraph_2: t("paragraph_2"),
  };
  return (
    <section className={styles.section} id="whatWeDo">
      <div>
        <h3 className="title" style={{ color: "var(--color-secondary)" }}>
          {content.title}
        </h3>

        <div className={styles.paragraphs}>
          <p>{content.paragraph_1}</p>

          <p>{content.paragraph_2}</p>
        </div>
      </div>

      <div className={styles.imageContainer} ref={ref}>
        <img
          src="/images/hand.png"
          alt="Hand"
          style={{
            transform: inView ? "translateY(0)" : "translateY(150px)",
            transition: "0.3s",
          }}
        />
      </div>
    </section>
  );
}
