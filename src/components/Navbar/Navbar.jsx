import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import DependentSelectExample from "../DependentSelectExample/DependentSelectExample";
  import classes from './Navbar.module.css';
const Navbar = () => {
    return (
        <div>
            <ul className={classes.NavUl}>
                <li>
                    <NavLink   activeClassName={classes.active} exact  to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName={classes.active} exact to="/icecream">IceCream</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName={classes.active} exact to="/DependentSelectExample">DependentSelectExample</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName={classes.active} exact to="/CrudHome">CrudHome</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName={classes.active} to="/j">IceCream</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
