import React, { useState } from "react";
import Select from "react-select";

const AddCartForm = ({ addUser, category, products, addToCart }) => {
    const initialFormState = { id: null, name: "", username: "" };
    const [user, setUser] = useState(initialFormState);

    const initialcartState = {id:null, category:"", product:"",price:"",qty:""};
    const [mycart, setMycart] = useState(initialcartState);

    const initPriceQty = {price:"",qty:""};
    const [PriceQty, setPriceQty] = useState(initPriceQty);

    const initPrice = {price:""};
    const [Price, setPrice] = useState(initPrice);



    const [productSelectorView, setproductSelectorView] = useState(null);
    const [catSelectorView, setcatSelectorView] = useState(null);
    const [categoryHook, setCategory] = useState(null);
    const [pro, setPro] = useState(null);
    const [ProductList, setProductList] = useState([]);
    const nullState = [
        { id:null, category:"", product:"" },
    ];
    const [selectedPro, setSelectedPro] = useState(nullState);
    

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUser({ ...mycart, [name]: value });
    // };
    
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     if (!user.name || !user.username) return;
    //     addUser(user);
    //     setUser(initialFormState);
    // };
    

    const optionsCategory = category.map((cat) => ({
        label: cat.category,
        value: cat.id,
    }));

    

    const optionsProducts = ProductList.map((pro) => ({
        label: pro.product,
        value: pro.id,
        price:pro.price,
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
        const testProduct = categoryHook.label;
        setcatSelectorView(testProduct);

        const testCategory = data.label;
        setproductSelectorView(testCategory);

        const proPrice = data.price;
        setPrice({...Price, price:proPrice});
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPriceQty({ ...PriceQty, [name]: value });
    };

    const handlePriceChange = (data) => {
        const { name, value } = data.target;
        setPrice({ ...Price, [name]: value });
    };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!Price.price || !PriceQty.qty || !catSelectorView || !productSelectorView) return;
        const getCat = catSelectorView;
        const getPro = productSelectorView;
        const getPrice = Price.price;
        const getQty = PriceQty.qty;
        setMycart({...mycart, category:getCat, product:getPro, price:getPrice, qty:getQty});
        console.log(mycart);
        addToCart(mycart);
        // setMycart(initialcartState);
    };


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Category - {catSelectorView}
                </label>
                <Select key={1}
                    placeholder="Select Category"
                    options={optionsCategory}
                    onChange={handleCategoryChange}
                />

                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Product - {productSelectorView}
                </label>
                <Select key={2}
                    placeholder="Select Product"
                    options={optionsProducts}
                    value={pro}
                    price = {null}
                    onChange={handleProductChange}
                    
                />
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Price {Price.price}
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={Price.price}
                    onChange={handlePriceChange}
                />
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Qty {PriceQty.qty}
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="qty"
                    value={PriceQty.qty}
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
