import React, { Component } from "react";
import classes from "./iceCreamBuilder.module.css";
import IceCream from "../../components/IceCream/IceCream";
import Builder from "../../components/Builder/Builder";
export default class iceCreamBuilder extends Component {
    state = {
        items: {
            Vanilla: 45,
            Chocolate: 50,
            Lemon: 350,
            Orange: 40,
            Strawberry: 60,
        },
        carts: [],
        totalPrice: 0,
    };


    addCart = (cart) => {
        const { carts, items } = this.state;
        const workCart = [...carts];
        workCart.push(cart);

        this.setState((prevState) => {
            return {
                carts: workCart,
                totalPrice: prevState.totalPrice + items[cart],
            };
        });
    };


    removeCart  = (cart) => {
        const  {carts, items} = this.state;
        const workCart = [...carts];
        const cartIndex =   workCart.findIndex((cIndex)=> cIndex === cart);
        if( cartIndex >= 0 ){
            workCart.splice(cartIndex, 1);
            this.setState((prevState) => {
                return{
                    carts : workCart,
                    totalPrice: prevState.totalPrice - items[cart],
                };
            });
        }
 
    };




    render() {
        const { items, totalPrice, carts } = this.state;
        return (
            <div className={["container", classes.container].join(" ")}>
                <IceCream carts={carts}></IceCream>
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addCart}
                    remove={this.removeCart}
                    carts = {carts}
                ></Builder>
            </div>
        );
    }
}
