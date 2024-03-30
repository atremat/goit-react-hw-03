import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <li className={css.listItem}>
      <div className={css.leftWrapper}>
        <div className={css.nameWrapper}>
          <FaUser />
          <span className={css.name}>{name}</span>
        </div>
        <div className={css.numberWrapper}>
          <FaPhone />
          <span className={css.number}>{number}</span>
        </div>
      </div>
      <button type="button" className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
}
