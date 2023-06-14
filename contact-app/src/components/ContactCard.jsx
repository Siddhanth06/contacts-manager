import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div>
      <div className="contact-container">
        <Link
          to={`/contact/${id}`}
          state={{ contact: props.contact }}
          className="link"
        >
          <div>
            <p className="name">{name}</p>
            <p className="email">{email}</p>
          </div>
        </Link>

        <div className="icons">
          <div
            className="icon"
            onClick={() => {
              props.clickHandler(props.contact.id);
            }}
          >
            <p className="delete">Delete</p>
            <p>
              <ion-icon name="trash-outline"></ion-icon>
            </p>
          </div>
          <Link
          to={`/edit/${id}`}
          state={{ contact: props.contact }}
          className="link"
        >
          <div className="icon">
            
              <p className="edit">Edit</p>
              <p>
                <ion-icon name="create-outline"></ion-icon>
              </p>
            
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
