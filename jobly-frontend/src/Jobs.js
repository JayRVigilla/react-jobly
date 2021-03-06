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
  }, [/**fetch all jobs from backend upon mount */]
  )

  return (
    <div className="container">
      <div className="search-bar">
        <Search filter={filterJobs} />
      </div>
      <div>
          {jobList.map(job => (
            <JobCard
              key={job.id}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
            />))}
      </div>
    </div>
  )
}

export default Jobs;