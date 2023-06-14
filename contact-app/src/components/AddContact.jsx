import { useEffect, useState } from "react";
import "./AddContact.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const AddContact = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userObj = {
      name: name,
      email: email,
    };
    props.getUser(userObj);
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1 style={{textAlign:"center"}}>Add Contacts</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          placeholder="Username"
          className="username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button className="add-btn" type="submit">
          Add Contact
        </button>
        <Link to={"/"}>
          <button className="home-btn">Home</button>
        </Link>
      </form>
    </div>
  );
};

export default AddContact;
