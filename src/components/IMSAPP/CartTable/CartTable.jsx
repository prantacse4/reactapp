import React from "react";
import { Table } from "react-bootstrap";
const CartTable = ({ users, deleteID, editRow }) => {
    const totaluser = users.length;


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {totaluser > 0 ? (
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className={['btn', 'btn-info'].join(' ')} onClick={() => editRow(user)} >
                                    Edit
                                </button>
                                <button onClick={() => deleteID(user.id)} className={['btn', 'btn-danger', 'ml-1'].join(' ')}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={4} className="text-center">No users</td>
                    </tr>
                )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CartTable;
