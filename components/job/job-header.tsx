import GlobeIcon from "mdi-react/GlobeIcon";
import ScheduleIcon from "mdi-react/ScheduleIcon";
import { JobImage } from "./job-image";
import styles from "./job.module.css";

export interface JobHeaderProps {
  title: string;
  location: string;
  type: string;
  company: string;
  logo: string;
  daysAgo: string;
}

export const JobHeader: React.FC<JobHeaderProps> = ({
  title,
  location,
  type,
  company,
  logo,
  daysAgo,
}) => (
  <>
    <div className={styles["job-title"]}>
      <h2>{title}</h2>
      <div className={styles["job-type"]}>{type}</div>
    </div>
    <div className={styles.icon}>
      <ScheduleIcon /> {daysAgo}
    </div>
    <div style={{ display: "flex" }}>
      <JobImage src={logo} alt={company} size={50} />
      <div className={styles["sub-title"]}>
        <h3>{company}</h3>
        <span className={styles.icon}>
          <GlobeIcon /> {location}
        </span>
      </div>
    </div>
  </>
);
