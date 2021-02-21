import React, { Component } from 'react';
import IceCream from '../../components/IceCream/IceCream';
import classes from './iceCreamBuilder.module.css';

export default class iceCreamBuilder extends Component {
    state = {};
    render() {
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream></IceCream>
            </div>
        )
    }
}
