import { GithubJob } from "../../lib/api";
import { fromToday } from "../../lib/date";
import { JobApply } from "./job-apply";
import { JobHeader } from "./job-header";
import styles from "./job.module.css";

export interface JobDescriptionProps extends GithubJob {}

export const JobDescription: React.FC<JobDescriptionProps> = ({
  id,
  type,
  created_at,
  company,
  company_logo,
  location,
  title,
  company_url,
  description,
  how_to_apply,
}) => (
  <div className={styles.description}>
    <JobApply html={how_to_apply} />
    <div>
      <JobHeader
        title={title}
        location={location}
        company={company}
        type={type}
        logo={company_logo}
        daysAgo={fromToday(created_at)}
      />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);
