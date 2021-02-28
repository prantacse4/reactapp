import React, { useState, useEffect } from "react";

const EditCartForm = (props) => {
    useEffect(() => {
        setUser(props.currentUser)
      }, [props])
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
      }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
        props.setEditing(false);
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label className="form-control-label">Name {user.name}</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
                <label className={["form-control-label", "mt-3"].join(" ")}>
                    Username {user.username}
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
                <button className={["btn", "btn-info", "mt-3"].join(" ")} >
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditCartForm;
