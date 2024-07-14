import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import ContanctCard from "./ContactCard";
import { useContactCrud } from "../context/ContactsCrudContext";

function ContanctList() {
    const {contacts, retrieveContacts, searchHandler, searchTerm, searchResults} = useContactCrud();
    const inputEl = useRef("");

    useEffect(() => {
        retrieveContacts();
    }, [])

    useEffect(() => {
        searchHandler("");
    }, [])

    //function that display each and every contact in contacts
    const renderContactList = (searchTerm.length < 1 ? contacts : searchResults).map((contact) => {
        return (
            <ContanctCard 
                contact={contact} 
                key={contact.id}
            />
        );
    });

    const getSearchTerm = () => {
        searchHandler(inputEl.current.value);
    }

    return (
        <div className="main main-content">
            <h2>
                Contact List <span/>
                <Link to="/add">
                    <button className="ui right floated button blue"><i className="plus square icon"></i>Add</button>
                </Link> 
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                        ref={inputEl} 
                        type="text" 
                        placeholder="Search Contacts" 
                        className="prompt" 
                        value={searchTerm} 
                        onChange={getSearchTerm}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}
            </div>
        </div>
    );
}

export default ContanctList;