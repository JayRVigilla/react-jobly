import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";


/** Component renders detail for a single job */
function JobCard({ title, salary, equity }) {

  return (
    <Card className="list-group-item">
      <div className="card">
        <CardHeader className="card-header">{title}</CardHeader>
        <CardBody>
          <p className="card-text text-right">Salary: ${salary}</p>
          <p className="card-text text-right">Equity: {equity}</p>
        </CardBody>
        {/* <a>Apply</a> */}
      </div>
    </Card>
  );
}

export default JobCard;