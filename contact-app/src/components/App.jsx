import "./App.scss";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const getUserHandler = async (user) => {
    const request = {
      id: uuid(),
      ...user,
    };
    const response = await api.post("/contacts", request);
    setContacts((prevUsers) => [...prevUsers, response.data]);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // useEffect(() => {
  //   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });
    setContacts(newContactList);
  };

  const updateUser = async (contact) => {
    console.log(contact);
    const response = await api.put(`/contacts/${contact.id}`, contact);
    // console.log(response.data);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id == id ? { ...response.data } : contact;
      })
    );
  };

  const searchHandler = (search) => {
    setSearchTerm(search);
    if (searchTerm != " ") {
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
  };
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ContactList
                  contacts={searchTerm < 1 ? contacts : searchResults}
                  getContactId={removeContactHandler}
                  term={searchTerm}
                  searchKeyword={searchHandler}
                />
              }
            />
            <Route
              path="/add"
              exact
              element={<AddContact getUser={getUserHandler} />}
            />
            <Route path="/contact/:id" exact element={<ContactDetail />} />
            <Route
              path="/edit/:id"
              exact
              element={<EditContact getUpdatedUser={updateUser} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};
