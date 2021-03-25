import React from "react";
import { Layout } from "../components";
import { API_URL, GithubJob } from "../lib/api";

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home(props: HomeProps) {
  return (
    <Layout title="Home">
      <h1>hello there</h1>
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
