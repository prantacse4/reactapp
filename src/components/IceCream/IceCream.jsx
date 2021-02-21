import React from 'react'
import classes from './IceCream.module'
import Scoop from './Scoop/Scoop'

const IceCream = () => {
    return (
        <div className={classes.icecream}>
              <p className={classes.cone}></p>
               <Scoop></Scoop>
              <div className={classes.cherry}></div>
            </div>
    )
}

export default IceCream
