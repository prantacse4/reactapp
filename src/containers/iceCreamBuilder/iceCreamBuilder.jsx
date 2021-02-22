import React, { Component } from 'react';
import classes from './iceCreamBuilder.module.css';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
export default class iceCreamBuilder extends Component {
    state = {};
    render() {
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream></IceCream>
                <Builder></Builder>
            </div>
        );
    };
};
