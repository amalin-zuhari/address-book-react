import React from 'react';
import { Link } from 'react-router-dom';

function ContactList() {
    // Create hooks
    const [contacts, setContacts] = React.useState([
        // Add dummy data: id, name, email, phone
        { id: 1, name: 'Ismail Bin Mail', email: 'ismail@yahoo.com', phone: '0148308967' },
        { id: 2, name: 'Jarjit Singh', email: 'jarjit@gmail.com', phone: '0138750099' },
        { id: 3, name: 'Mei Mei', email: 'meimei@hotmail.com', phone: '01982542876' },
    ]);

    const handleDeleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-gray-700">Contact List</h1>
                <Link to="/add" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md">
                    Add New Contact
                </Link>
            </div>

            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3 text-left font-semibold text-gray-700 border-b">Name</th>
                        <th className="p-3 text-left font-semibold text-gray-700 border-b">Email</th>
                        <th className="p-3 text-left font-semibold text-gray-700 border-b">Phone</th>
                        <th className="p-3 text-left font-semibold text-gray-700 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id} className="hover:bg-gray-100">
                            <td className="p-3 border-b font-medium text-gray-800">{contact.name}</td>
                            <td className="p-3 border-b text-gray-600">{contact.email}</td>
                            <td className="p-3 border-b text-gray-600">{contact.phone}</td>
                            <td className="p-3 border-b flex items-center space-x-2">
                                <Link to={`/contact/${contact.id}`} className="text-blue-500 hover:underline">View</Link>
                                <Link to={`/edit/${contact.id}`} className="text-green-500 hover:underline">Edit</Link>
                                <button
                                    onClick={() => handleDeleteContact(contact.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;
