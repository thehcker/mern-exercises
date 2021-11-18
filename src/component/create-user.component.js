import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };
    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(`There was an errror in adding users: ${err}`));
    console.log(user);
    this.setState({
      username: ""
    });
  }
  onChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h2>Create New User</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              required
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              id="username"
            ></input>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create User Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
