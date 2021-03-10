import React, { useState } from "react";
import Select from "react-select";

const AddCartForm = ({ addUser, category, products, addToCart }) => {
    const initialFormState = { id: null, name: "", username: "" };
    const [user, setUser] = useState(initialFormState);



    const initialcartState = {id:null, category:"", product:"",price:"",qty:""};
    const [mycart, setMycart] = useState(initialcartState);

    const initQty = {price:"",qty:""};
    const [Qty, setQty] = useState(initQty);

    const initPrice = {price:""};
    const [Price, setPrice] = useState(initPrice);

    const [productSelectorView, setproductSelectorView] = useState(null);
    const [catSelectorView, setcatSelectorView] = useState(null);
    const [categoryHook, setCategory] = useState(null);
    const [pro, setPro] = useState(null);
    const [ProductList, setProductList] = useState([]);

    

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
        setPrice(initPrice);
        setQty(initQty);
        setcatSelectorView(null);
        setproductSelectorView(null);
        
    };


    const handleProductChange = (data) => {
        setPro(data);
        const testCategory = categoryHook.label;
        setcatSelectorView(testCategory); 
        const testProduct = data.label;
        setproductSelectorView(testProduct);
        const proPrice = data.price;
        setPrice({...Price, price:proPrice});
        const addCat  = categoryHook.label;
        const addPro = data.label;
        setMycart({...mycart, category:addCat, product:addPro, price:data.price, qty:0});

      };


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQty({ ...Qty, [name]: value });
        const addQty = event.target.value;
        setMycart({...mycart,  qty:addQty});
    };

    const handlePriceChange = (data) => {
        const { name, value } = data.target;
        setPrice({ ...Price, [name]: value });
        const addPrice = data.target.value;
        setMycart({...mycart,  price:addPrice, qty:0});

    };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!Price.price || !Qty.qty || !catSelectorView || !productSelectorView) return;
        const getCat = catSelectorView;
        const getPro = productSelectorView;
        const getPrice = Price.price;
        const getQty = Qty.qty;
        setMycart({...mycart, category:getCat, product:getPro, price:getPrice, qty:getQty});
        addToCart(mycart);
        setMycart(initialcartState);
        setPro(null); 
        setPrice(initPrice);
        setQty(initQty);
        setcatSelectorView(null);
        setproductSelectorView(null);
        setCategory(null);
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
                    value={categoryHook}
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
                    Qty {Qty.qty}
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="qty"
                    value={Qty.qty}
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
