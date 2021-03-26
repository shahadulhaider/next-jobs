import ArrowIcon from "mdi-react/KeyboardBackspaceIcon";
import Link from "next/link";
import styles from "./job.module.css";

export interface JobApplyProps {
  html: string;
}

export const JobApply: React.FC<JobApplyProps> = ({ html }) => (
  <div className={styles.apply}>
    <Link href="/">
      <a>
        <ArrowIcon /> Back to search
      </a>
    </Link>
    <h3 className={styles["apply-header"]}>how to apply</h3>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);
