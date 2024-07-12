import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import ContanctCard from "./ContactCard";

function ContanctList(props) {
    //function that display each and every contact in contacts
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContanctCard 
                contact={contact} 

                key={contact.id}
            />
        );
    });
    return (
        <div className="main main-content">
            <h2>
                Contact List <span/>
                <Link to="/add">
                    <button className="ui right floated button blue"><i className="plus square icon"></i>Add</button>
                </Link> 
            </h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
}

export default ContanctList;