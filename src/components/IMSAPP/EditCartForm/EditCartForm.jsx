import React, { useState, useEffect } from "react";

const EditCartForm = (props) => {
    const DataAvailable = props.products.filter((product) =>  product.id===props.CurrentCart.product_id);
    const availableqty = parseInt(DataAvailable[0].qty)+parseInt(props.CurrentCart.qty);
    const minEditablePrice = DataAvailable[0].price;
    const [myAllProducts, setmyAllProducts] = useState(props.products);
    const [errors, setErrors] = useState({});
    const [availaleQty, setAvailableQty] = useState(availableqty);
    let error = {};

    useEffect(() => {
        setMycarts(props.CurrentCart)
      }, [props])
    const [mycarts, setMycarts] = useState(props.CurrentCart);


    const handleInputChange = (event) => {
        const { name, value } = event.target
        const addPrice = event.target.value;
        if(!addPrice){
            error.price = "This field is required!";
            setErrors(error);
        }
        else if(addPrice<=minEditablePrice){
            error.price = "Please sell this greater than"+minEditablePrice+" Taka";
            setErrors(error);
        }
        else if(addPrice<1){
            error.price = "Price must be positive integer";
            setErrors(error);
        }
        else{
            let eq = "";
            setErrors(error.qty=eq);
        }
        setMycarts({ ...mycarts, [name]: value })
      }

    const handleQtyChange = (event) =>{
        const { name, value } = event.target
        const addQty = event.target.value;
        if(!addQty){
            error.qty = "This field is required!";
            setErrors(error);
        }
        else if(addQty>availableqty){
            error.qty = "Sorry! Only "+availableqty+" items available";
            setErrors(error);
        }
        else if(addQty<1){
            error.qty = "Items must be at least 1";
            setErrors(error);
        }
        else{
            let eq = "";
            setErrors(error.qty=eq);
        }
        setMycarts({ ...mycarts, [name]: value })
    }

    const aEdataID = mycarts.product_id;
    const aEdataProduct = mycarts.product;
    const aEdataCategory = mycarts.category;
    const aEdataPrice  = minEditablePrice;
    const aEdataQty = parseInt(availableqty) - parseInt(mycarts.qty);

    const UpdatedProductData = {
        id:aEdataID,
        product:aEdataProduct,
        price:aEdataPrice,
        qty:aEdataQty,
        category:DataAvailable[0].category,
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(!errors){
            props.updateCart(mycarts.id, mycarts);
            const FindProductIndex = myAllProducts.findIndex((product) => product.id === props.CurrentCart.product_id);


            let AfterEditedData = myAllProducts;
            AfterEditedData[FindProductIndex] = UpdatedProductData;
            setmyAllProducts(AfterEditedData); 

            props.setEditingCart(false);
        }
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
                    Price {mycarts.price} (Available {minEditablePrice})  {errors.price && <span>*{errors.price}</span>}
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={mycarts.price}
                    onChange={handleInputChange}
                    
                />

            <label className={["form-control-label", "mt-3"].join(" ")}>
                    Quantity - {mycarts.qty} (Available {availaleQty})  {errors.qty && <span>*{errors.qty}</span>}
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="qty"
                    value={mycarts.qty}
                    onChange={handleQtyChange}
                    
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
