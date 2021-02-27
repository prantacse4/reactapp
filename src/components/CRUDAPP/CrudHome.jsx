import React, { useState } from "react";
import AddUserForm from "./AddUserForm/AddUserForm.jsx";
import UserTable from './UserTable/UserTable.jsx';

const CrudHome = () => {
    const usersData = [
        { id: 1, name: 'Pranta', username: 'prantacse4' },
        { id: 2, name: 'Arman', username: 'gachpagol' },
        { id: 3, name: 'Ben', username: 'benisphere' },
      ];
      const [users, setUsers] = useState(usersData);

      const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
      }
      const deleteUser = (id) => {
          console.log(id);
        // setUsers(users.filter((user) => user.id !== id))
      }

    const deleteData =(id) =>{
        //Procedure 1
        const data = users.filter((user) => user.id !== id);
        console.log(data);
        setUsers(data);

        //Procedure 2
        // const UserIndex =   users.findIndex((user)=> user.id === id);
        // if( UserIndex >= 0 ){
        //     users.splice(UserIndex, 1);
        //     console.log(users);
        //     setUsers(users);
        // }
    }

    return (
        <div>
            <div className="container-fluid">
                <h1>Crud With Hooks</h1> <br/>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Add User</h2>
                        <AddUserForm addUser = {addUser} ></AddUserForm>
                    </div>
                    <div className="col-md-8">
                        <h2>View User</h2>
                        <UserTable users={users} deleteUser={deleteUser} deleteID={deleteData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrudHome;
