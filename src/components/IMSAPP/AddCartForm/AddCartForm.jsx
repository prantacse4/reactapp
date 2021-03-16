import React, { useState } from "react";
import Select from "react-select";

const AddCartForm = ({ category, products, addToCart }) => {

    const initialcartState = {id:null, category:"", product:"", product_id: "", price:"",qty:""};
    const [mycart, setMycart] = useState(initialcartState);

    //Set Qty=0 Products

    const initQty = {qty:""};
    const [Qty, setQty] = useState(initQty);

    const initafSubQty = {qty:""};
    const [afSubQty, setafSubQty] = useState(initafSubQty);

    const initafSubPrice = {price:""};
    const [afSubPrice, setafSubPrice] = useState(initafSubPrice);

    const initPrice = {price:""};
    const [Price, setPrice] = useState(initPrice);

    const [productSelectorView, setproductSelectorView] = useState(null);
    const [catSelectorView, setcatSelectorView] = useState(null);
    const [categoryHook, setCategory] = useState(null);
    const [pro, setPro] = useState(null);
    const [ProductList, setProductList] = useState([]);

    const [myAllProducts, setmyAllProducts] = useState(products);
    const [errors, setErrors] = useState({});
    let error ={};

    // const ProData = myAllProducts.filter((product) => product.qty===0);
    // if(ProData.length>0){
    //     const Cdata = myAllProducts.filter((product) => product.qty!==0);
    //     setmyAllProducts(Cdata);
    // }

    



    const optionsCategory = category.map((cat) => ({
        label: cat.category,
        value: cat.id,
    }));

    const optionsProducts = ProductList.map((pro) => ({
        label: pro.product,
        value: pro.id,
        price:pro.price,
        qty:pro.qty,
        product_id:pro.id,
    }));



    const handleCategoryChange = (data) => {
        setCategory(data);
        const dataID = data.value;
        const productsdet = myAllProducts.filter((pro) => pro.category === dataID);
        const productCopy = [...productsdet];
        setProductList(productCopy);
        setPro(null); 
        setPrice(initPrice);
        setQty(initQty);
        setcatSelectorView(null);
        setproductSelectorView(null);
        setErrors({});
        
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

        setafSubQty({...afSubQty, qty:data.qty});
        setafSubPrice({...afSubPrice, price:proPrice});
        setErrors({});



        setQty({...Qty, qty:data.qty});
        setMycart({...mycart, category:addCat, product:addPro, product_id:data.product_id, price:data.price, qty:data.qty});

      };


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQty({ ...Qty, [name]: value });
        const addQty = event.target.value;
        setMycart({...mycart,  qty:addQty});


        if(addQty>afSubQty.qty){
            error.qty = "Sorry! Only "+afSubQty.qty+" items available";
            setErrors(error);
        }
        else if(addQty<1){
            error.qty = "Quantity must be at least 1";
            setErrors(error);
        }
        else{
            let eq = "";
            setErrors(error.qty=eq);
        }

    };

    const handlePriceChange = (data) => {
        const { name, value } = data.target;
        setPrice({ ...Price, [name]: value });
        const addPrice = data.target.value;
        setMycart({...mycart,  price:addPrice, qty:0});


        if(addPrice<afSubPrice.price){
            error.price = "Alert! You will be in loss";
            setErrors(error);
        }
        else if(addPrice<1){
            error.price = "Price must be at least 1";
            setErrors(error);
        }
        else{
            let eq = "";
            setErrors(error.price=eq);
        }

    };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        const getCat = catSelectorView;
        const getPro = productSelectorView;
        const getPrice = Price.price;
        const getQty = Qty.qty;
        

        if (!Price.price || !Qty.qty || !catSelectorView || !productSelectorView)return;

        const  HavingData = myAllProducts.filter((products) => mycart.product === products.product);
        const havingID = HavingData[0].id;
        const havingProduct = HavingData[0].product;
        const havingPrice = HavingData[0].price;
        let havingQty = HavingData[0].qty;
        const havingCategory= HavingData[0].category;
        const afterSubmitQty = HavingData[0].qty-mycart.qty;
        havingQty = afterSubmitQty;
        let forCompareQty = HavingData[0].qty;
        if(getQty<1 || getQty>forCompareQty || getPrice<1){
            return;
        }
       
        setMycart({...mycart, category:getCat, product:getPro, price:getPrice, qty:getQty});

        
        const settingData = {id:havingID,product:havingProduct, category:havingCategory, price:havingPrice, qty:havingQty};
        const findProductIndex = myAllProducts.findIndex((product) => product.id === havingID);
        let AfterSubmitProducts = myAllProducts;
        AfterSubmitProducts[findProductIndex] = settingData;
        setmyAllProducts(AfterSubmitProducts);

        addToCart(mycart);

        

        setErrors({});
        setafSubQty({});
        setafSubPrice({});
        setMycart(initialcartState);
        setPro(null); 
        setPrice(initPrice);
        setQty(initQty);
        setcatSelectorView(null);
        setproductSelectorView(null);
        setCategory(null);
        setProductList([]);
    };

    const setNullAll = (e) =>{
        setErrors({});
        setafSubQty({});
        setafSubPrice({});
        setMycart(initialcartState);
        setPro(null); 
        setPrice(initPrice);
        setQty(initQty);
        setcatSelectorView(null);
        setproductSelectorView(null);
        setCategory(null);
        setProductList([]);
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
                    Price {Price.price} (Available {afSubPrice.price}) {errors.price && <span>*{errors.price}</span>}
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={Price.price}
                    onChange={handlePriceChange}
                />
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Qty {Qty.qty} (Available {afSubQty.qty})  {errors.qty && <span>*{errors.qty}</span>}
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
                </button> <span><button  onClick={setNullAll} className={["btn", "btn-info", "mt-3", "ml-2"].join(" ")}>
                    Reset
                </button></span>
            </form>
        </div>
    );
};

export default AddCartForm;
