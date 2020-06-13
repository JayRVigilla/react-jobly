import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Search from "./Search";
import JoblyApi from "./JoblyAPI";


/** Renders a list of all JobCards and a search box
 */
function Jobs() {
  const [jobList, setJobList] = useState([])

  // Filters job list if search term entered into search box
  async function filterJobs(searchTerm) {
    const req = await JoblyApi.getAllJobs(searchTerm);
    setJobList([...req]);
  }

  useEffect(() => {
    async function fetchJobs() {
      let newJobs = await JoblyApi.getAllJobs();
      setJobList([...newJobs]);
    }
    fetchJobs();
    console.log("fetched jobs")
  }, [/**fetch all jobs from backend upon mount */]
  )

  return (
    <div className="container">
      <Search filter={filterJobs} />
      <div className="row justify-content-lg-center">
      <ul className="list-group list-group-flush">
        {jobList.map(job => (
          <JobCard
            key={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />))}
      </ul>
      </div>
    </div>
  )
}

export default Jobs;