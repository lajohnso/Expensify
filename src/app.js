import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenceDashboardPage = () => <div>This is content from dashboard</div>;

const AddExpensePage = () => <div>This is content from Add expense</div>;

const EditExpensePage = () => <div>This is content from Edit</div>;

const HelpPage = () => <div>This is content from Help</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={ExpenceDashboardPage} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
