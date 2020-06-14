import React from "react"
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";
import "./CompanyCard.css"


/** Component renders detail for a single company */
function CompanyCard({ handle, name, description, logoUrl }) {

  //TBD on click of div, render filered job list for this company
  // keep company name and description at top of job list
  // TODO: make sure logos render, just showing alt 4/29

  return (
    <Card>
      <CardBody className="company-card">
        <Link to={`companies/${handle}`}>
          <CardHeader className="card-header">{name} <img src={logoUrl} alt={`${name} logo`} />
          </CardHeader>
          <p className="card-text">{description}</p>
        </Link>
      </CardBody>
    </Card>
  );
}

export default CompanyCard;