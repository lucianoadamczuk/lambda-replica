import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./Faqs.module.css";

export default function Faqs() {
  const { t } = useTranslation("translation", { keyPrefix: "FAQ" });
  const content = {
    title: t("title"),
    items: t("items", { returnObjects: true }),
  };

  return (
    <section className={styles.section} id="frequentQuestions">
      <h3 className="title" style={{ color: "var(--color-primary)" }}>
        {content.title}
      </h3>
      <div>
        {content.items.map((i) => (
          <Accordion key={i.question} question={i.question} answer={i.answer} />
        ))}
      </div>
    </section>
  );
}
