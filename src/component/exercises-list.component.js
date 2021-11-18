import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substr(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>Edit</Link> |
      </td>
      <td>
        <a href="#" onClick={() => props.handleDelete(props.exercise._id)}>
          Delete
        </a>
      </td>
    </tr>
  );
};
export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises")
      .then(res => {
        console.log("Data:", res.data);
        this.setState({
          exercises: res.data
        });
      })
      .catch(err => console.log(`There is an Error: ${err}`));
  }

  handleDelete(id) {
    console.log("ID:", id);
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map(exercise => {
              return (
                <Exercise
                  exercise={exercise}
                  handleDelete={this.handleDelete}
                  key={exercise._id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
