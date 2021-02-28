import React, { useState } from "react";
import Select from "react-select";

const AddCartForm = ( {addUser, category, products}) => {
    const initialFormState = { id: null, name: "", username: "" };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        addUser(user);
        setUser(initialFormState);
    };


 const optionsCategory  = 
    category.map((cat) => (
        { label: cat.category, value: cat.id }
    ));

    const optionsProducts  = 
    products.map((pro) => (
        { label: pro.product, value: pro.id }
    ));

      
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <label className={["form-control-label", "mt-3"].join(" ")}>Category</label>
                <Select placeholder="Select Category" 
                options = {optionsCategory}
                />

<label className={["form-control-label", "mt-3"].join(" ")}>Product</label>
                <Select placeholder="Select Product" 
                options = {optionsProducts}
                />
                <label className={["form-control-label", "mt-3"].join(" ")}>Name {user.name}</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Username {user.username}
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
                <button className={["btn", "btn-success", "mt-3"].join(" ")}>
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddCartForm;
