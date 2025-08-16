import { useState, useEffect } from "react";
import JobListing from "../components/JobListing";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const apiUrl = `/api/jobs/${id}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);
  return (
    <section>
      <h1>{job.title}</h1>
    </section>
  );
};

export default JobPage;
