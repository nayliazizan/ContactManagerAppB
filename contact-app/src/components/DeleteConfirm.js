import React from "react";
import user from "../images/man.png"
import { Link } from "react-router-dom/cjs/react-router-dom";

function DeleteConfirm(props) {
    const {id, name, email} = props.location.state.contact;
    return (
        <div className="main main-content">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div" style={{ display: 'flex', justifyContent: 'center'}}>
                <div className="item">
                    <h3>Are you sure you want to delete this contact?</h3>
                </div>
                
            </div>
            <div className="center-div" style={{ display: 'flex', justifyContent: 'center'}}>
                
                <div className="item">
                    <Link to="/" onClick={() => props.clickHandler(id)}><button className="ui button red center">Yes</button></Link>
                    <Link to="/"><button className="ui button blue center">No</button></Link>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirm;