import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactCrud } from "../context/ContactsCrudContext";
import { Link } from "react-router-dom";

const EditContact = () => {
    const location = useLocation();
    const {id, name,email} = location.state.contact;
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const {updateContactHandler} = useContactCrud();
    const navigate = useNavigate();

    //handle form submission. display error msg if the field blank
    const update = (e) => {
        e.preventDefault(); //prevent reload page after add
        if (newName === "" || newEmail === "") {
            alert("All the fields are mandatory!");
            return;
        }
        updateContactHandler({id, name:newName, email:newEmail});
        setNewName("");
        setNewEmail("");
        navigate("/"); 
    }

    
        return (
            <div className="ui main main-content">
                <h2>Update Contact</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name: </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            value={newName} 
                            onChange={(e)=> setNewName(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Email: </label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value={newEmail} 
                            onChange={(e)=> setNewEmail(e.target.value)}
                        />
                    </div>
                    <button className="ui button blue" ><i className="plus square icon"></i>Update</button>
                    <Link to="/"><button className="ui button blue center">Back to Home</button></Link>
                </form>
            </div>
        );
    
}

export default EditContact;