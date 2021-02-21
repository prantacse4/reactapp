import React from "react";
import classes from "./Body.module.css";
import iceCreamBuilder from "../../containers/iceCreamBuilder/iceCreamBuilder";

const Body = () => {
    return (
        <div className={classes.mainBody}>
            <iceCreamBuilder></iceCreamBuilder>
        </div>
    );
};

export default Body;
