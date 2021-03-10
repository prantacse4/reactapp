import React, { useState } from "react";
import AddCartForm from "./AddCartForm/AddCartForm.jsx";
import EditCartForm from "./EditCartForm/EditCartForm.jsx";
import CartTable from "./CartTable/CartTable.jsx";
const ImsAppHome = () => {
    const usersData = [
        { id: 1, name: "Pranta", username: "prantacse4" },
        { id: 2, name: "Arman", username: "gachpagol" },
        { id: 3, name: "Ripon ", username: "pabnaferot" },
    ];
    const mycart = []
    const category = [
        {id:1, category:"Mobile"},
        {id:2, category:"Camera"},
        {id:3, category:"Electronics"},
        {id:4, category:"Laptops"},
    ];

    const products = [
        {id:1, product:"Samsung J7", price:18500, category:1},
        {id:2, product:"Samsung J7 Prime",price:22500, category:1},
        {id:3, product:"Nokia 5",price:17500, category:1},
        {id:4, product:"Canon 600D",price:48000, category:2},
    ];
    const [users, setUsers] = useState(usersData);
    const [mycarts, setMycarts] = useState(mycart);

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const addToCart = (mycartData) => {
        mycartData.id = mycarts.length + 1;
        setMycarts([...mycarts, mycartData]);
    };


    const deleteData = (id) => {
        //Procedure 1
        const data = mycarts.filter((user) => user.id !== id);
        setMycarts(data);

        //Procedure 2

        // const cartIndex = mycarts.findIndex((mycart) => mycart.id === id);

        // if (cartIndex >= 0) {
        //     const cartDataCopy = [...mycarts];
        //     cartDataCopy.splice(cartIndex, 1);
        //     setMycarts(cartDataCopy);
        // }
        
    };

    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, name: "", username: "" };
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const editRow = (user) => {
        setEditing(true);

        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username,
        });
    };

    const updateUser = (id, updatedUser) => {
        setEditing(false);

        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    };

    return (
        <div>
            <div className="container-fluid">
                <h1 className={['card','card-header','bg-info','text-white','text-center'].join(' ')}>IMS CART PROBLEM</h1> <br />
                <div className="row">
                    <div className="col-md-4">
                        {editing ? (
                            <div>
                                <h2>Edit Cart</h2>
                                <EditCartForm
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Add to Cart</h2>
                                <AddCartForm addUser={addUser} addToCart={addToCart} category={category} products={products} />
                            </div>
                        )}
                    </div>
                    <div className="col-md-8">
                        <h2>View Cart</h2>
                        <CartTable
                            users={users}
                            mycarts={mycarts}
                            deleteID={deleteData}
                            editRow={editRow}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImsAppHome;
