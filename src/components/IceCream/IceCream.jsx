import React from "react";
import classes from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop.jsx";

const IceCream = ({ carts }) => {
    console.log(carts);
    return (
        <div className={classes.icecream}>
            <p className={classes.cone}></p>
            {carts.map((cart) => (
                <Scoop  key={`${cart}${Math.random()}`}  scoop = {cart} />
            ))}
            <div className={classes.cherry}></div>
        </div>
    );
};

export default IceCream;
