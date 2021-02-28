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
    const [users, setUsers] = useState(usersData);

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };
    const deleteUser = (id) => {
        console.log(id);
        // setUsers(users.filter((user) => user.id !== id))
    };

    const deleteData = (id) => {
        //Procedure 1
        const data = users.filter((user) => user.id !== id);
        // console.log(data);
        // setUsers(data);

        //Procedure 2

        const UserIndex = users.findIndex((user) => user.id === id);
        if (UserIndex >= 0) {
            const usersCopy = [...users];
            usersCopy.splice(UserIndex, 1);
            setUsers(usersCopy);
        }
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
                                <h2>Edit User</h2>
                                <EditCartForm
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Add User</h2>
                                <AddCartForm addUser={addUser} />
                            </div>
                        )}
                    </div>
                    <div className="col-md-8">
                        <h2>View User</h2>
                        <CartTable
                            users={users}
                            deleteUser={deleteUser}
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
