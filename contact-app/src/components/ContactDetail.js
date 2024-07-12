import React from "react";
import user from "../images/man.png"
import { Link } from "react-router-dom/cjs/react-router-dom";

function ContanctDetail(props) {
    const {name, email} = props.location.state.contact;
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
                <Link to="/">
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    );
}

export default ContanctDetail;