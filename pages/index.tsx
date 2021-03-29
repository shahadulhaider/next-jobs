import React, { useState } from "react";
import {
  JobCard,
  Layout,
  Loader,
  Pagination,
  SearchBox,
  SearchLocation,
  SearchType,
} from "../components";
import { API_URL, GithubJob } from "../lib/api";

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home(props: HomeProps) {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState<GithubJob[]>(props.jobs);
  const [type, setType] = useState(false);
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(0);

  const handleSearch = (term?: string) => {
    setLoading(true);
    fetch("/api", {
      method: "post",
      body: JSON.stringify({
        term,
        type,
        location,
        page,
      }),
    })
      .then((res) => res.json())
      .then(setJobs)
      .then(() => setLoading(false))
      .catch(console.log);
  };

  const handlePageChange = (count: number) => {
    setPage(count - 1);
    handleSearch();
  };

  return (
    <Layout title="Home">
      <SearchBox onSearch={handleSearch} />
      <div className="responsive">
        <div className="search-widgets">
          <SearchType checked={type} onChange={setType} />
          <SearchLocation location={location} onChange={setLocation} />
        </div>
        <div className="full-width">
          {loading ? (
            <Loader />
          ) : (
            jobs.map((job) => <JobCard key={job.id} {...job} />)
          )}
          <Pagination
            current={page + 1}
            onChange={handlePageChange}
            hasNext={jobs.length === 50}
            disabled={loading}
          />
        </div>
      </div>
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
