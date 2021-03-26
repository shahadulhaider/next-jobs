import React, { useEffect } from "react";
import { JobCard, Layout } from "../components";
import { API_URL, GithubJob } from "../lib/api";

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home({ jobs }: HomeProps) {
  const handleSearch = () => {
    fetch("/api", {
      method: "post",
      body: JSON.stringify({
        fullTime: true,
        location: "London",
        page: 1,
        term: "react",
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.log);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Layout title="Home">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${API_URL}.json`);
    const jobs = await data.json();

    return {
      props: {
        jobs,
      },
    };
  } catch (err) {
    return {
      props: {
        jobs: [],
      },
    };
  }
};
