import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function Contact({ name, number }) {
  return (
    <li>
      <div>
        <FaUser />
        <p>{name}</p>
      </div>
      <div>
        <FaPhone />
        <p>{number}</p>
      </div>
    </li>
  );
}
