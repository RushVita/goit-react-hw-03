import css from "./Contact.module.css";
import { MdLocalPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
export default function Contact({ contact, onDelete }) {
  return (
    <>
      <li className={css.item}>
        <p className={css.desc}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.desc}>
          <MdLocalPhone />
          {contact.number}
        </p>
        <button className={css.btn} onClick={()=>onDelete(contact.name)}>Delete</button>
      </li>
    </>
  );
}
