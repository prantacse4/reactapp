import React from "react";
import { Table } from "react-bootstrap";
const CartTable = ({ deleteID, mycarts, editCart }) => {
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
                                <button className={['btn', 'btn-info'].join(' ')} onClick={() => editCart(cart)} >
                                    Edit
                                </button>
                                <button onClick={() => deleteID(cart.id, cart)} className={['btn', 'btn-danger', 'ml-1'].join(' ')}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={8} className="text-center">No Data</td>
                    </tr>
                )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CartTable;
