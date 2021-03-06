import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { JobDescription, Layout } from "../../components";
import { API_URL, GithubJob } from "../../lib/api";

export interface JobProps {
  job: GithubJob;
  redirect: boolean;
}

export const Job: React.FC<JobProps> = ({ job, redirect }) => {
  const router = useRouter();

  useEffect(() => {
    if (redirect) {
      router.push("/404");
    }
  }, []);

  const title = job?.title ? `${job.title}` : "Job Listing";

  return (
    <Layout title={title}>{Boolean(job) && <JobDescription {...job} />}</Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params;
    const data = await fetch(`${API_URL}/${id}.json`);
    const job = await data.json();
    return {
      props: {
        job,
        redirect: false,
      },
    };
  } catch (err) {
    return {
      props: {
        job: {},
        redirect: true,
      },
    };
  }
};

export default Job;
