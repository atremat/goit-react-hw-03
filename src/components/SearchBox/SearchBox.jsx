import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  const searchValueId = useId();

  return (
    <div className={css.container}>
      <label htmlFor="searchValueId" className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={searchValueId}
        className={css.input}
      />
    </div>
  );
}
