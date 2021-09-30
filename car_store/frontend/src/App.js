import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownOptions from './Components/DropdownOptions';
import AddMenu from './Components/AddMenu';
import UpdateMenu from './Components/UpdateMenu';
import UpdateManyMenu from './Components/UpdateManyMenu';
import DeleteMenu from './Components/DeleteMenu';
import CarsList from './Components/CarsList';
import { Login } from './Components/Login';
import { Register } from './Components/Register'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg fixed-top" id="sideNav">
            <DropdownOptions />
            <Route path="/AddMenu" component={AddMenu} />
            <Route path="/UpdateMenu" component={UpdateMenu} />
            <Route path="/UpdateManyMenu" component={UpdateManyMenu} />
            <Route path="/DeleteMenu" component={DeleteMenu} />
            <Route path="/CarsList" component={CarsList} />
          </nav>
          <CarsList />
          <Register />
          <Login />
        </BrowserRouter>

      </div>

    );
  }
}

export default App;
