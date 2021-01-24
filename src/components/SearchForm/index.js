import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.jobs array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="job"> Job Title:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="jobTitle"
          list="Jobs"
          type="text"
          className="form-control"
          placeholder="Type in a Job title to begin"
          id="jobId"
        />
        <datalist id="jobs">
          {props.jobs.map((job) => (
            <option value={job} key={job} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
