import React from "react";
import classes from "./Header.module.css";
import logo from '../../assets/images/logo.svg';
import react from '../../assets/images/react.svg';
export const Header = () => {
    return (
        <header>
            <div className="container" >
                <div>
                    <img className={classes.logo} src={logo} alt="Logo" />
                </div>
                <div className="textRight">
                    <img src={react} alt="React" className={classes.reactLogo} />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    );
};

export default Header;