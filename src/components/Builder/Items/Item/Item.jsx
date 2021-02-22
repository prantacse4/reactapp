import React from "react";
import classes from './Item.module.css';
const Item = ({name, allitems}) => {

    return (
        <li className={classes.item}>
            <span>{name} - Price: {allitems[name]} Taka</span>
            <span className={classes.quantity}>2</span>
            <div className="right">
                <button type="button" className={[classes.plus, 'rounded' ].join(' ')}>
                    +
                </button>
                <button type="button" className={[classes.minus, 'rounded' ].join(' ')}>
                    -
                </button>
            </div>
        </li>
    );
};

export default Item;
