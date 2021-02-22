import React, { Component } from 'react';
import classes from './iceCreamBuilder.module.css';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
export default class iceCreamBuilder extends Component {
    state = {
        items : {
            vanilla : 45,
            chocolate : 50,
            lemon : 350,
            orange : 40,
            strawberry: 60,
        },
        carts : [],
        totalPrice : 0,
    };
    addtocard  = (cart) => {
        const  {carts, items} = this.state;
        const workCart = [...carts];
        workCart.push(cart);


        this.setState({
            carts : workCart,
            totalPrice: items[cart],
        });

    };
    render() {
        const {items, totalPrice} = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream items = {items}></IceCream>
                <Builder items = {items} price = {totalPrice} ></Builder>
            </div>
        );
    };
};
