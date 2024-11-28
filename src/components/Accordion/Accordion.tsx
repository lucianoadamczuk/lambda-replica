import { LuChevronDown } from "react-icons/lu";

import { useRef, useState } from "react";
import styles from "./Accordion.module.css";
interface Props {
  question: string;
  answer: string;
}
export default function Accordion({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);
  return (
    <article className={styles.accordion} onClick={() => setIsOpen(!isOpen)}>
      <div
        className={styles.question}
        style={{ color: isOpen ? "var(--color-primary)" : "inherit" }}
      >
        <p>{question} </p>
        <LuChevronDown style={{ rotate: isOpen ? "180deg" : "inherit" }} />
      </div>
      <div
        ref={ref}
        className={styles.answer}
        style={{ height: isOpen ? ref.current?.scrollHeight : "0px" }}
      >
        <p> {answer} </p>
      </div>
    </article>
  );
}
