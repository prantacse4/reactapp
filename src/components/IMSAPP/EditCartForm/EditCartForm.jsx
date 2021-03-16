import React, { useState, useEffect } from "react";

const EditCartForm = (props) => {
    useEffect(() => {
        setMycarts(props.CurrentCart)
      }, [props])
    const [mycarts, setMycarts] = useState(props.CurrentCart);
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setMycarts({ ...mycarts, [name]: value })
      }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.updateCart(mycarts.id, mycarts);
        props.setEditingCart(false);
    };

    const handleaddcartform = (e) =>{
        e.preventDefault();
        props.setEditingCart(false);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label className="form-control-label">Category</label>
                <input
                    type="text"
                    className="form-control"
                    value={mycarts.category}
                    readOnly
                />
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Product Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    value={mycarts.product}
                    readOnly
                />

                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Price
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={mycarts.price}
                    onChange={handleInputChange}
                    
                />

            <label className={["form-control-label", "mt-3"].join(" ")}>
                    Quantity
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="qty"
                    value={mycarts.qty}
                    onChange={handleInputChange}
                    
                />
                <button className={["btn", "btn-info", "mt-3"].join(" ")} >
                    Update
                </button><span><button className={["btn", "btn-warning", "mt-3", "ml-2"].join(" ")} onClick={handleaddcartform} >
                    Cancel
                </button></span>
            </form>
        </div>
    );
};

export default EditCartForm;
