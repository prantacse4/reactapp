import React from "react";
import classes from "./Header.module.css";

export const header = () => {
    return (
        <header>
            <div class="container react" id="header">
                <div>
                    <img class="logo" src="images/logo.svg" alt="Logo" />
                </div>
                <div class="textRight">
                    <img src="images/react.svg" alt="React" class="reactLogo" />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    );
};
