import GlobeIcon from "mdi-react/GlobeIcon";
import ScheduleIcon from "mdi-react/ScheduleIcon";
import Link from "next/link";
import { GithubJob } from "../../lib/api";
import { fromToday } from "../../lib/date";
import { JobImage } from "./job-image";
import styles from "./job.module.css";

export interface JobCardProps extends GithubJob {}

export const JobCard: React.FC<JobCardProps> = ({
  id,
  type,
  created_at,
  company,
  company_logo,
  location,
  title,
}) => (
  <Link href={`/jobs/${id}`}>
    <div className={styles.card}>
      <JobImage src={company_logo} alt={company} size={90} />
      <div className={styles.info}>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <div className={styles.meta}>
          <span className={styles["job-type"]}>{type}</span>
          <div className={styles.icon}>
            <span>
              <GlobeIcon /> {location}
            </span>
            <span>
              <ScheduleIcon /> {fromToday(created_at)}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
