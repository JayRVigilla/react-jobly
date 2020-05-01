import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyAPI";
import JobCard from "./JobCard";


/**
 * Renders Detal about a specific company along with JobCards for that company's jobs
 */
function Company() {
  /**company State is an object containing company data:
   * {name: name,
   * description: desc,
   * jobs: [{id: id, title: title, salary: salary, equity: equity}...]}
   */
  const [company, setCompany] = useState({jobs: []});
  const { handle } = useParams();

  useEffect(() => {
    async function fetchCompany() {
      let newCompany = await JoblyApi.getCompany(handle);
      setCompany(newCompany);
    }
    fetchCompany();
  }, [handle]);

  return (
    <div className="container">
      <div>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </div>
      <div className="row justify-content-md-center">
        <ul className="list-group list-group-flush">
        {company.jobs.map(job => (
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


export default Company;