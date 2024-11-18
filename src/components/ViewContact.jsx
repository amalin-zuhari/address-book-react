// src/components/ViewContact.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ViewContact = ({ contacts, onDelete, onEdit }) => {
  const { id } = useParams();
  const contact = contacts[id]; // Get the contact by its index from the URL
  const navigate = useNavigate();

  if (!contact) {
    return <div>Contact not found!</div>;
  }

  const handleDelete = () => {
    console.log("Deleting contact with ID:", id); // Debugging
    onDelete(id); // Update state
    setTimeout(() => {
      alert("Contact deleted successfully!");
      navigate("/"); // Navigate after confirming state update
    }, 300); // Add a small delay if needed
  };
  

  const handleEdit = () => {
    navigate(`/edit/${id}`); // Navigate to the edit page for this contact
  };

  return (
    <div className="container py-5">
      <div className="text-center">
        {/* Profile Picture */}
        <img
          src={contact.profilepic || "https://via.placeholder.com/150"}
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />
        {/* Contact Details */}
        <h2>{contact.name}</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>

        {/* Edit and Delete buttons */}
        <div className="mt-4">
          <Button variant="primary" className="me-2" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>

        {/* Back to Home Button */}
        <div className="mt-4">
          <Button variant="secondary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewContact;
