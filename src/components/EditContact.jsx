// src/components/EditContact.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const EditContact = ({ contacts, onEditContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts[id];

  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const [profilepic, setProfilepic] = useState(contact.profilepic);

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setProfilepic(contact.profilepic);
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = { name, email, phone, profilepic };
    onEditContact(id, updatedContact); // Update the contact
    alert("Contact edited successfully!");
    navigate(`/view/${id}`); // Redirect to the View page after editing
  };

  return (
    <div className="container py-5">
      <h2>Edit Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Profile Picture URL</Form.Label>
          <Form.Control
            type="text"
            value={profilepic}
            onChange={(e) => setProfilepic(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditContact;
