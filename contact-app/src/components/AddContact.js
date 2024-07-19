import React, { useState } from "react";
import { useContactCrud } from "../context/ContactsCrudContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddContact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const {addContactHandler} = useContactCrud();
    const navigate = useNavigate();

    //handle form submission. display error msg if the field blank
    const add = (e) => {
        e.preventDefault(); //prevent reload page after add
        if (name === "" || email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        addContactHandler({name, email});
        setName("");
        setEmail("");
        navigate("/");
    }

        return (
            <div className="ui piled segments" style={{margin: '80px'}}>
                <div className='ui segment'>
                    <h2>Add Contact</h2>
                </div>
                <div className='ui segment'>
                    <form className="ui form" onSubmit={add}>
                        <div className="field">
                            <label>Name: </label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name"
                                value={name} 
                                onChange={(e)=> setName(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Email: </label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email"
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <button className="ui button orange"><i className="plus square icon"></i>Add</button>
                        <Link to="/"><button className="ui button orange center">Back to Home</button></Link>
                    </form>
                </div>
                
                
            </div>
        );
}

export default AddContact;