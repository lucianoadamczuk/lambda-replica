import { ThreeCircles } from "react-loader-spinner";
import styles from "./Loading.module.css";
export default function Loading() {
  return (
    <div className={styles.section}>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="var(--color-primary)"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
