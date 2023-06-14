import { Link, useLocation } from "react-router-dom";
import user_img from "../images/user.png";
import "./ContactDetail.scss";
const ContactDetail = (props) => {
    let { state } = useLocation();
    const {id,name,email} = state.contact;
console.log(state);
  return (
<div className="ContactDetail">
    <img src={user_img} alt="" />
    <p className="name">{name}</p>
    <p className="email">{email}</p>
    <Link to={"/"}>
    <button>Home</button>    
    </Link>
</div>
  );
};

export default ContactDetail;
