import React, { Component } from 'react';
import classes from './iceCreamBuilder.module.css';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
export default class iceCreamBuilder extends Component {
    state = {
        items : {
            vanilla : 45,
            chocolate : 50,
            lemon : 35,
            orange : 40,
            strawberry: 60,
        },
        carts : [],
        totalPrice : 0,
    };
    addtocard  = (cart) => {};
    render() {
        const {items} = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream items = {items}></IceCream>
                <Builder items = {items}></Builder>
            </div>
        );
    };
};
