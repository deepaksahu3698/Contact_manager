import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = React.useState([
    {
      id : "1",
      name : "Siddharth",
      email : "siddharth@abc.com"
    },
    {
      id : "2",
      name : "Sid",
      email : "sid@abc.com"
    }
  ]);
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts , contact]);
  }

  return (
    <div className="ui container">
      <Header />    
      <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
