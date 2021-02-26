import React from "react";
import Item from "./Item/Item";

const Items = ({flavour, add, remove, carts}) => {
    const allitem = Object.keys(flavour);

    return (
        <div>
            <ul>
                { allitem.map((allitem) => (
                    <Item key={allitem} name = {allitem} allitems = {flavour} add = {add} remove = {remove} carts = {carts}></Item>
                ) ) }
               
            </ul>
        </div>
    );
};

export default Items;
