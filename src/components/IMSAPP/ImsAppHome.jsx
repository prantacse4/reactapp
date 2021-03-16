import React, { useState } from "react";
import AddCartForm from "./AddCartForm/AddCartForm.jsx";
import EditCartForm from "./EditCartForm/EditCartForm.jsx";
import CartTable from "./CartTable/CartTable.jsx";
const ImsAppHome = () => {
    
    const mycart = [];
    const category = [
        {id:1, category:"Mobile"},
        {id:2, category:"Camera"},
        {id:3, category:"Electronics"},
        {id:4, category:"Laptops"},
    ];

    const products = [
        {id:1, product:"Samsung J7", price:18500, qty:4, category:1},
        {id:2, product:"Samsung J7 Prime",price:22500, qty:3, category:1},
        {id:3, product:"Nokia 5",price:17500, qty:5, category:1},
        {id:4, product:"Canon 600D",price:48000, qty:6, category:2},
    ];

    let productsCopy = [...products];
    const [myAllProducts, setmyAllProducts] = useState(productsCopy);
    const [myAllProductsOrginal, setmyAllProductsOrginal] = useState(products);
    const [mycarts, setMycarts] = useState(mycart);

    


    const addToCart = (mycartData) => {
        mycartData.id = mycarts.length + 1;
        setMycarts([...mycarts, mycartData]);
    };


    const deleteData = (id, cartq) => {
        //Procedure 1
        const data = mycarts.filter((cart) => cart.id !== id);
        setMycarts(data);
        const inCartProduct_id = cartq.product_id;
        const inCartProduct_qty = cartq.qty;

        const DeletedProductsUpdateData = myAllProducts.filter((product) => product.id === inCartProduct_id);
        const UpdatedQtyData = DeletedProductsUpdateData[0].qty;
        const NewQty = parseInt(UpdatedQtyData)+ parseInt(inCartProduct_qty);
        const UpdatedProductData = {
            id:DeletedProductsUpdateData[0].id,
            product:DeletedProductsUpdateData[0].product,
            price:DeletedProductsUpdateData[0].price,
            qty:NewQty,
            category:DeletedProductsUpdateData[0].category,
        };

        const FindProductIndex = myAllProducts.findIndex((product) => product.id === inCartProduct_id);
        let AfterDeleteProducts = myAllProducts;
        AfterDeleteProducts[FindProductIndex] = UpdatedProductData;
        setmyAllProducts(AfterDeleteProducts); 



        //Procedure 2
        // const cartIndex = mycarts.findIndex((mycart) => mycart.id === id);
        // if (cartIndex >= 0) {
        //     const cartDataCopy = [...mycarts];
        //     cartDataCopy.splice(cartIndex, 1);
        //     setMycarts(cartDataCopy);
        // }

    };

    const [editingCart, setEditingCart] = useState(false);
    const initialCartState = { id: null, category: "", product: "", price:"", qty:"" };
    const [CurrentCart, setCurrentCart] = useState(initialCartState);

 

    const editCart = (cartdata) => {
        setEditingCart(true);
        setCurrentCart({
            id: cartdata.id,
            category: cartdata.category,
            product: cartdata.product,
            price: cartdata.price,
            qty: cartdata.qty,
        });
        
        
    };



    const updateCart = (id, updatedCart) => {
        setEditingCart(false);
        setMycarts(mycarts.map((cart) => (cart.id === id ? updatedCart : cart)));
    };

    return (
        <div>
            <div className="container-fluid">
                <h1 className={['card','card-header','bg-info','text-white','text-center'].join(' ')}>IMS CART PROBLEM</h1> <br />
                <div className="row">
                    <div className="col-md-4">
                        {editingCart ? (
                            <div>
                                <h2>Edit Cart</h2>
                                <EditCartForm
                                    setEditingCart={setEditingCart}
                                    CurrentCart={CurrentCart}
                                    updateCart={updateCart}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Add to Cart</h2>
                                <AddCartForm  addToCart={addToCart} category={category} products={myAllProducts} />
                            </div>
                        )}
                    </div>
                    <div className="col-md-8">
                        <h2>View Cart</h2>
                        <CartTable
                            mycarts={mycarts}
                            deleteID={deleteData}
                            editCart={editCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImsAppHome;
