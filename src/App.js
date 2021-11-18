import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./component/navbar.component";
import ExcercisesList from "./component/exercises-list.component";
import EditExercise from "./component/edit-exercise.component";
import CreateExercise from "./component/create-exercise.component";
import CreateUser from "./component/create-user.component";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/" exact component={ExcercisesList} />
      </Switch>
    </Router>
  );
}

export default App;
