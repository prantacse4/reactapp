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
    const [mycarts, setMycarts] = useState(mycart);
    const [myAllProducts, setmyAllProducts] = useState(products);



    const addToCart = (mycartData) => {
        mycartData.id = mycarts.length + 1;

        const  HavingData = myAllProducts.filter((products) => mycartData.product === products.product);
        const havingID = HavingData[0].id;
        const havingProduct = HavingData[0].product;
        const havingPrice = HavingData[0].price;
        let havingQty = HavingData[0].qty;
        const havingCategory= HavingData[0].category;
        const afterSubmitQty = HavingData[0].qty-mycartData.qty;
        havingQty = afterSubmitQty;
        const settingData = {id:havingID,product:havingProduct, category:havingCategory, price:havingPrice, qty:havingQty};
        const findProductIndex = myAllProducts.findIndex((product) => product.id === havingID);
        let AfterSubmitProducts = myAllProducts;
        AfterSubmitProducts[findProductIndex] = settingData;
        setmyAllProducts(AfterSubmitProducts);
        setMycarts([...mycarts, mycartData]);
    };


    const deleteData = (id) => {
        //Procedure 1
        const data = mycarts.filter((cart) => cart.id !== id);
        setMycarts(data);

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
