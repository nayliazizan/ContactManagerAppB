import React from "react";
import user from "../images/man.png"
import { Link } from "react-router-dom/cjs/react-router-dom";

function ContanctCard(props) {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
                <img className="ui avatar image" src={user} alt="user"/>
                <div className="content">
                    <Link to={{pathname:`contact/${id}`, state:{contact: props.contact}}}>
                        <h3 className="header">{name}</h3>
                        <div>{email}</div>
                    </Link>
                </div>
                <Link to={{pathname:`contact/delete/${id}`, state:{contact: props.contact}}}>
                    <i 
                        className="trash icon red" 
                        style={{ marginTop: "7px", float: "right", cursor: "pointer", marginLeft: "8px"}}
                    ></i>
                </Link>
                <Link to={{pathname:`/edit`, state:{contact: props.contact}}}>
                    <i 
                        className="edit icon" 
                        style={{ marginTop: "7px", float: "right", cursor: "pointer"}}
                    ></i>
                </Link>
                
        </div>
    );
}

export default ContanctCard;