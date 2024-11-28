import { useTranslation } from "react-i18next";
import styles from "./Values.module.css";
export default function Values() {
  const { t } = useTranslation("translation", { keyPrefix: "values" });

  const content = {
    title: t("title"),
    items: t("items", { returnObjects: true }),
  };
  return (
    <section className={styles.section} id="ourValues">
      <div>
        <h3 className="title"> {content.title} </h3>
      </div>
      {content.items.map((val) => (
        <div key={val.title}>
          <h6 className="subtitle"> {val.title} </h6>
          <p> {val.paragraph} </p>
        </div>
      ))}
    </section>
  );
}
