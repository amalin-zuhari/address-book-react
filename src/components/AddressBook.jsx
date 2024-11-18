// src/components/AddressBook.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const AddressBook = ({ contacts, handleDelete }) => {
  return (
    <div className="container py-5">
      <h1 className="text-center">Address Book</h1>

      {/* List of contacts */}
      <ListGroup className="mt-4">
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                {/* Profile Picture */}
                <img
                  src={contact.profilepic || "https://via.placeholder.com/40"}
                  alt="Profile"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                {/* Contact Name with Link to View */}
                <Link to={`/view/${index}`} style={{ textDecoration: "none" }}>
                  <span>{contact.name}</span>
                </Link>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <p>Address book is empty.</p>
        )}
      </ListGroup>

      {/* Add New Contact button */}
      <div className="text-center mt-3">
        <Link to="/add" className="btn btn-primary">
          Add New Contact
        </Link>
      </div>
    </div>
  );
};

export default AddressBook;
