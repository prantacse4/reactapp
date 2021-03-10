import React from "react";
import { Table } from "react-bootstrap";
const CartTable = ({ users, deleteID, editRow, mycarts }) => {
    const totaluser = users.length;
    const totalcarts = mycarts.length;


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Prouct</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {/* {totaluser > 0 ? (
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
                ) */}


{totalcarts > 0 ? (
                    mycarts.map((cart) => (
                        <tr key={cart.id*Math.random()}>
                            <td>{cart.id}</td>
                            <td>{cart.category}</td>
                            <td>{cart.product}</td>
                            <td>{cart.price}</td>
                            <td>{cart.qty}</td>
                            <td>{cart.qty*cart.price}</td>
                            <td>
                                <button className={['btn', 'btn-info'].join(' ')} onClick={() => editRow(cart)} >
                                    Edit
                                </button>
                                <button onClick={() => deleteID(cart.id)} className={['btn', 'btn-danger', 'ml-1'].join(' ')}>
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
