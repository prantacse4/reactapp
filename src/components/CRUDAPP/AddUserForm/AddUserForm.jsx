import React, { useState } from 'react'

const AddUserForm = (addUser) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
  
      setUser({ ...user, [name]: value })
    }

const handleFormSubmit = (event) => {
    event.preventDefault()
        if (!user.name || !user.username) return
        addUser.addUser(user)
        setUser(initialFormState)
}
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label className="form-control-label">Name  {user.name}</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                   />
                <label className={['form-control-label', 'mt-3'].join(' ')}>Username  {user.username}</label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                   />
                <button className={['btn', 'btn-success', 'mt-3'].join(' ')}>Add new user </button>
                </form>
        </div>
    )
}

export default AddUserForm
