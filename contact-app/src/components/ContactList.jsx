import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useRef } from "react";
import "./ContactList.scss";
const ContactList = (props) => {
  console.log(props);
  const inputEl = useRef();
  console.log(props.contacts);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = (e) => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="contact-main-container">
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Contacts List</h3>
        <Link to="/add">
          <button className="add-contact">Add Contacts</button>
        </Link>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <input
          ref={inputEl}
          type="text"
          placeholder="Search contact"
          className="prompt"
          value={props.term}
          onChange={getSearchTerm}
        />
      </div>
      {renderList.length > 0 ? (
        renderList
      ) : (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1>No Contacts Available</h1>
        </div>
      )}
    </div>
  );
};

export default ContactList;
