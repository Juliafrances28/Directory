import React, { Component } from "react";
import API from "../utils/Api";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    jobs: [],
    result: [],
    error: "",
  };

  // When the component mounts, get a list of all possible jobs at the company and update this.state.jobs

  componentDidMount() {
    API.getEmployeeList()
      .then((res) =>
        this.setState({
          Emloyees: res.data.message,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getCompanyJobs(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }

        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ miniHeight: "80%" }}>
          <h1 className="text-center">Search By Job!</h1>
          <Alert
            type="danger"
            style={{
              opacity: this.state.error ? 1 : 0,
              marginBottom: 10,
            }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            jobs={this.state.jobs}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
