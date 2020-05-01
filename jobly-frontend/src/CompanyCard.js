import React from "react"
import {Link} from "react-router-dom";


/** Component renders detail for a single company */
function CompanyCard({handle, name, description, logoUrl }) {

  //TBD on click of div, render filered job list for this company
  // keep company name and description at top of job list
  // TODO: make sure logos render, just showing alt 4/29

  return (
    <li className="list-group-item list-group-item-action">
      <Link to={`companies/${handle}`}>
        <h5 className="card-header">{name} <img src={logoUrl} alt={`${name} logo`} className="float-right"/></h5>
        <p className="card-text">{description}</p>
        
      </Link>
    </li>
  );
}

export default CompanyCard;