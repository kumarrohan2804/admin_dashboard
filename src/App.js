import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/TopBar/TopBar";
import "./app.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" exact>
            <UserList />
          </Route>
          <Route path="/user/:id" exact>
            <User />
          </Route>
          <Route path="/newUser" exact>
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
