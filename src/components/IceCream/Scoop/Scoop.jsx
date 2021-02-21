import React from 'react'
import classes from './Scoop.module';
const Scoop = () => {
    return (
        <div className={[classes.scoop, classes.orange].join(' ')}></div>
    )
}

export default Scoop
