// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddressBook from './components/AddressBook';
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact';
import EditContact from './components/EditContact';

const App = () => {
  // Initialize with dummy data
  const [contacts, setContacts] = useState([
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      profilepic: 'bob.jpg',
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      profilepic: 'alice.png',
    },
    {
      name: 'Alice Johnson',
      email: 'alicej@example.com',
      phone: '555-555-5555',
      profilepic: 'charlie.png',
    },
  ]);

  // Add a new contact
  const handleAdd = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  // Delete a contact by its index
  const handleDelete = (id) => {
    setContacts(contacts.filter((_, index) => index !== id));
  };

  // Edit a contact by its index
  const handleEdit = (id, updatedContact) => {
    const updatedContacts = contacts.map((contact, index) =>
      index === parseInt(id) ? { ...contact, ...updatedContact } : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <Routes>
      {/* AddressBook: Display the list of contacts */}
      <Route
        path="/"
        element={<AddressBook contacts={contacts} handleDelete={handleDelete} />}
      />

      {/* AddContact: Form to add a new contact */}
      <Route path="/add" element={<AddContact onAddContact={handleAdd} />} />

      {/* ViewContact: Display details of a specific contact */}
      <Route
        path="/view/:id"
        element={<ViewContact contacts={contacts} onDelete={handleDelete} />}
      />

      {/* EditContact: Form to edit a contact */}
      <Route
        path="/edit/:id"
        element={<EditContact contacts={contacts} onEditContact={handleEdit} />}
      />
    </Routes>
  );
};

export default App;
