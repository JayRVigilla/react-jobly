import React from "react"
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import "./CompanyCard.css"


/** Component renders detail for a single company */
function CompanyCard({ handle, name, description, logoUrl }) {

  //TBD on click of div, render filered job list for this company
  // keep company name and description at top of job list
  // TODO: make sure logos render, just showing alt 4/29

  return (
    <li>
      <div className="company-card">
        <Card>
          <Link to={`companies/${handle}`}>
            <div className="head">
              <h5 className="card-header">{name} <img src={logoUrl} alt={`${name} logo`} className="float-right" /></h5>
            </div>
            <p className="card-text">{description}</p>

          </Link>
        </Card>
      </div>
    </li>
  );
}

export default CompanyCard;