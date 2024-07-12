import './App.css';
import React, { useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import api from '../api/contacts';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import ContactDetail from './ContactDetail';
import DeleteConfirm from './DeleteConfirm';
import EditContact from './EditContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"; //define local storage key for storing contacts
  //initialize state using useState for storing contacts
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []); 

  //retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  //handle add new contact
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]); //to display after add contact
  }// i add "id: uuid()" so that i can delete contact based on id

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const {id, name, email} = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact; 
        //this will update state after u update one contact
    }))
  }

  //handle remove a contact by id
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  // to let the page save the added contacts even after refresh page
  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, [])
  
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact 
            //cant use the "component { () => {<contactlist />}}" way 
            //bcs cant pass props
            render={(props) => (
              <ContactList 
                {...props}
                contacts={contacts}
              />
            )}
          />
          <Route 
            path="/add" 
            exact
            render={(props) => (
              <AddContact 
                {...props} 
                addContactHandler={addContactHandler}
              />
            )}
          />
          <Route 
            path="/edit" 
            exact
            render={(props) => (
              <EditContact 
                {...props} 
                updateContactHandler={updateContactHandler}
              />
            )}
          />
          <Route 
            path="/contact/:id"
            exact
            component={ContactDetail}
          />

          <Route 
            path="/contact/delete/:id"
            exact
            render={(props) => (
              <DeleteConfirm 
                {...props} 
                clickHandler={removeContactHandler}
              />
            )}
          />

        </Switch>
      </Router>
    </div>
  );
}

export default App;