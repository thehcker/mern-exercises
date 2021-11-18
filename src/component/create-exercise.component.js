import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map(user => user.username),
            username: res.data[0].username
          });
        }
      })
      .catch(err =>
        console.log(`There was an errror in adding exercises: ${err}`)
      );
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then(res => console.log(res.data))
      .catch(err =>
        console.log(`There was an errror in adding exercises: ${err}`)
      );
    console.log("Exercise:", exercise);
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h2>Create New Exercise</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <select
              ref="userInput"
              required
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              id="username"
            >
              {this.state.users.map(user => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              required
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              id="description"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              className="form-control"
              name="duration"
              value={this.state.duration}
              onChange={this.onChange}
              id="duration"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
