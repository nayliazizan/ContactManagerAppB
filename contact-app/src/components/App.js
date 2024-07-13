import './App.css';
import React, { useState, useEffect} from 'react';

import api from '../api/contacts';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import DeleteConfirm from './DeleteConfirm';
import EditContact from './EditContact';
import { ContactsCrudContext } from '../context/ContactsCrudContext';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"; //define local storage key for storing contacts
  //initialize state using useState for storing contacts

  //getLocalStorageVariable ? JSON.parse(getLocalStorageVariable) : [] is used to check if getLocalStorageVariable 
  //is not null. If it's not null, it means there's a valid JSON string in local storage, and it can be safely 
  //parsed with JSON.parse. 
  //If it is null, it initializes contacts with an empty array [].
  const getLocalStorageVariable = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [contacts, setContacts] = useState(getLocalStorageVariable ? JSON.parse(getLocalStorageVariable) : []);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  }

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <ContactsCrudContext>
          <Routes>
            <Route 
              path="/" 
              exact 
              //cant use the "component { () => {<contactlist />}}" way 
              //bcs cant pass props
              element={<ContactList/>}
            />
            <Route 
              path="/add" 
              exact
              element={<AddContact/>}
            />
            <Route 
              path="/edit" 
              exact
              element={<EditContact/>}
            />
            <Route 
              path="/contact/:id"
              exact
              element={<ContactDetail/>}
            />

            <Route 
              path="/delete"
              exact
              element={<DeleteConfirm/>}
            />

          </Routes>
        </ContactsCrudContext>
      </Router>
    </div>
  );
}

export default App;
