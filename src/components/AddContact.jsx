import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new contact with profile pic
    const newContact = {
      name,
      email,
      phone,
      profilepic: profile ? URL.createObjectURL(profile) : null, // Generate a temporary URL for the uploaded image
    };

    onAddContact(newContact); // Add the new contact
    setShowAlert(true); // Show success alert

    // Redirect to AddressBook
    setTimeout(() => {
      navigate("/");
    }, 1500); // Small delay to display the alert before navigation
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(file); // Set the selected file as the profile picture
    }
  };

  return (
    <div className="container py-5">
      <h2>Add New Contact</h2>
      {showAlert && <Alert variant="success">Contact added successfully!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
          {profile && (
            <div className="mt-3">
              <img
                src={URL.createObjectURL(profile)}
                alt="Profile Preview"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => {
              const formattedName = e.target.value
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase());
              setName(formattedName);
            }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button type="submit" className="btn btn-primary">
            Add to Contact
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddContact;
