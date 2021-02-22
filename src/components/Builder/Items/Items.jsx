import React from "react";
import Item from "./Item/Item";

const Items = ({flavour}) => {
    const allitem = Object.keys(flavour);


    return (
        <div>
            <ul>
                { allitem.map((allitem) => (
                    <Item key={allitem} name = {allitem} allitems = {flavour}></Item>
                ) ) }
               
            </ul>
        </div>
    );
};

export default Items;
