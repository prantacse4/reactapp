import React from "react";
import classes from "./Body.module.css";
import IceCreamBuilder from '../../containers/iceCreamBuilder/iceCreamBuilder';

const Body = () => {
    return (
        <div className={classes.mainBody}>
            <IceCreamBuilder></IceCreamBuilder>
        </div>
    );
};

export default Body;
