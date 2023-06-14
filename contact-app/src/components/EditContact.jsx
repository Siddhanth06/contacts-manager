import { useEffect, useState } from "react";
import "./AddContact.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const EditContact = (props) => {
  let { state } = useLocation();
    const {id,name,email} = state.contact;
  console.log(state.contact);
  const navigate = useNavigate();
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);

  const updateHandler = (e) => {
    e.preventDefault();
    const updatedContact = {
      id:id,
      name: updateName,
      email: updateEmail,
    };
    // console.log(userObj);
    props.getUpdatedUser(updatedContact);
    setUpdateName("");
    setUpdateEmail("");
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1 style={{textAlign:"center"}}>Edit Contact</h1>
      <form onSubmit={updateHandler}>
        <input
          type="text"
          value={updateName}
          placeholder="Username"
          className="username"
          onChange={(e) => {
            setUpdateName(e.target.value);
          }}
        />
        <input
          type="email"
          value={updateEmail}
          placeholder="Email"
          className="email"
          onChange={(e) => {
            setUpdateEmail(e.target.value);
          }}
        />

        <button className="add-btn" type="submit">
          Edit Contact
        </button>
        <Link to={"/"}>
          <button className="home-btn">Home</button>
        </Link>
      </form>
    </div>
  );
};

export default EditContact;
