import React from "react";
import classes from './Item.module.css';

import {countBy} from 'lodash';
const Item = ({name, allitems, add, remove, carts}) => {
    const counterCart = countBy(carts);
    const countCart = counterCart[name];
    var count = 0;
    if (countCart >0) {
        count = countCart;
    };

    return (
        <li className={classes.item}>
            <span>{name} - Price: {allitems[name]} Taka</span>
            <span className={classes.quantity}>{count}</span>
            <div className="right">
                <button type="button" onClick={add.bind(this, name)} className={[classes.plus, 'rounded' ].join(' ')} >
                    +
                </button>
                <button type="button" onClick={remove.bind(this, name)} className={[classes.minus, 'rounded' ].join(' ')}>
                    -
                </button>
            </div>
        </li>
    );
};

export default Item;
