import React from "react"


/** Component renders detail for a single job */
function JobCard({ title, salary, equity }) {

  return (
    <li className="list-group-item">
      <div className="card border-dark mb-6">
        <h5 className="card-header">{title}</h5>
        <p className="card-text text-right">Salary: ${salary}</p>
        <p className="card-text text-right">Equity: {equity}</p>
        {/* <a>Apply</a> */}
      </div>
    </li>
  );
}

export default JobCard;