import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
const ArrowFirstMobile = () => (
  <svg
    className={styles.arrowMobile}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 800 800"
  >
    <g
      stroke-width="10"
      stroke="#595959"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="rotate(46, 400, 400)"
    >
      <path
        d="M139 139Q253 239 661 661 "
        marker-end="url(#SvgjsMarker1187)"
      ></path>
    </g>
    <defs>
      <marker
        markerWidth="5"
        markerHeight="5"
        refX="2.5"
        refY="2.5"
        viewBox="0 0 5 5"
        orient="auto"
        id="SvgjsMarker1187"
      >
        <polygon
          points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
          fill="#595959"
        ></polygon>
      </marker>
    </defs>
  </svg>
);

const ArrowFirstDesktop = () => (
  <svg
    className={styles.arrowDesktop}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 800 800"
  >
    <g
      stroke-width="22"
      stroke="#595959"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="matrix(0.981627183447664,0.1908089953765448,-0.1908089953765448,0.981627183447664,52.67272477155234,57.02552847031643)"
    >
      <path
        d="M227.89291381835938 248.4896011352539Q668.8929138183594 166.4896011352539 544.8929138183594 565.4896011352539 "
        marker-end="url(#SvgjsMarker4824)"
      ></path>
    </g>
    <defs>
      <marker
        markerWidth="5"
        markerHeight="5"
        refX="2.5"
        refY="2.5"
        viewBox="0 0 5 5"
        orient="auto"
        id="SvgjsMarker4824"
      >
        <polygon
          points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
          fill="#595959"
        ></polygon>
      </marker>
    </defs>
  </svg>
);

const ArrowSecondMobile = () => (
  <svg
    className={styles.arrowMobile}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 800 800"
  >
    <g
      stroke-width="10"
      stroke="#595959"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="rotate(46, 400, 400)"
    >
      <path
        d="M139 139Q283 316 661 661 "
        marker-end="url(#SvgjsMarker1283)"
      ></path>
    </g>
    <defs>
      <marker
        markerWidth="5"
        markerHeight="5"
        refX="2.5"
        refY="2.5"
        viewBox="0 0 5 5"
        orient="auto"
        id="SvgjsMarker1283"
      >
        <polygon
          points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
          fill="#595959"
        ></polygon>
      </marker>
    </defs>
  </svg>
);

const ArrowSecondDesktop = () => (
  <svg
    className={styles.arrowDesktop}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 800 800"
  >
    <g
      stroke-width="22"
      stroke="#595959"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="matrix(0.19080899537654492,0.981627183447664,-0.981627183447664,0.19080899537654492,712.3272752284477,-104.97447152968357)"
    >
      <path
        d="M294.49232482910156 224.9452667236328Q75.49232482910156 733.9452667236328 572.4923248291016 502.9452667236328 "
        marker-end="url(#SvgjsMarker2426)"
      ></path>
    </g>
    <defs>
      <marker
        markerWidth="5"
        markerHeight="5"
        refX="2.5"
        refY="2.5"
        viewBox="0 0 5 5"
        orient="auto"
        id="SvgjsMarker2426"
      >
        <polygon
          points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
          fill="#595959"
        ></polygon>
      </marker>
    </defs>
  </svg>
);

export default function About() {
  const { t } = useTranslation("translation", { keyPrefix: "about" });
  const content = {
    paragraph_1: t("paragraph_1"),
    phrase: t("phrase"),
    paragraph_2: t("paragraph_2"),
  };
  return (
    <section className={styles.section} id="about">
      <div className={`${styles.box} ${styles.box1}`}>
        <p>{content.paragraph_1}</p>
      </div>
      <div className={`${styles.box} ${styles.box2}`}>
        <ArrowFirstMobile />
        <ArrowFirstDesktop />
      </div>
      <div className={`${styles.box} ${styles.box3}`}>
        <h4 className="title">{content.phrase}</h4>
      </div>
      <div className={`${styles.box} ${styles.box4}`}>
        <ArrowSecondMobile />
        <ArrowSecondDesktop />
      </div>
      <div className={`${styles.box} ${styles.box5}`}>
        <p>{content.paragraph_2}</p>
      </div>
    </section>
  );
}
