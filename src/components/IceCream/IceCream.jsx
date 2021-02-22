import React from "react";
import classes from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop.jsx";

const IceCream = ({ items }) => {
    const flavours = Object.keys(items);
    return (
        <div className={classes.icecream}>
            <p className={classes.cone}></p>
            {flavours.map((flavours) => (
                <Scoop  key={flavours}  scoop = {flavours} />
            ))}
            <div className={classes.cherry}></div>
        </div>
    );
};

export default IceCream;
