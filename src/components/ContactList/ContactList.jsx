import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((item) => {
        return <Contact key={item.id} contact={item} onDelete={onDelete} />;
      })}
    </ul>
  );
}
