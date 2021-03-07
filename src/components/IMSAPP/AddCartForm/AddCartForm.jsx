import React, { useState } from "react";
import Select from "react-select";

const AddCartForm = ({ addUser, category, products }) => {
    const initialFormState = { id: null, name: "", username: "" };
    const [user, setUser] = useState(initialFormState);


    const [categoryHook, setCategory] = useState(null);
    const [pro, setPro] = useState(null);
    const [ProductList, setProductList] = useState([]);
    const nullState = [
        { id:null, category:"", product:"" },
    ];
    const [selectedPro, setSelectedPro] = useState(nullState);
    


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

    const optionsCategory = category.map((cat) => ({
        label: cat.category,
        value: cat.id,
    }));

    

    const optionsProducts = ProductList.map((pro) => ({
        label: pro.product,
        value: pro.id,
    }));

    const handleCategoryChange = (data) => {
        setCategory(data);
        const dataID = data.value;
        const productsdet = products.filter((pro) => pro.category === dataID);
        const productCopy = [...productsdet];
        setProductList(productCopy);
        setPro(null); 

    };


    const handleProductChange = (data) => {
        setPro(data);
        console.log(data.label);
        console.log(categoryHook.label);
        
      };


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Category
                </label>
                <Select key={1}
                    placeholder="Select Category"
                    options={optionsCategory}
                    onChange={handleCategoryChange}
                />

                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Product
                </label>
                <Select key={2}
                    placeholder="Select Product"
                    options={optionsProducts}
                    value={pro}
                    onChange={handleProductChange}
                    
                />
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Name {user.name}
                </label>
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
