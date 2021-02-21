import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop.jsx';

const IceCream = () => {
    return (
        <div className={classes.icecream}>
              <p className={classes.cone}></p>
               <Scoop />
              <div className={classes.cherry}></div>
            </div>
    );
};

export default IceCream;
