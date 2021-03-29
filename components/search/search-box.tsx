import WorkOutlineIcon from "mdi-react/WorkOutlineIcon";
import { useState } from "react";
import styles from "./search.module.css";

export interface SearchBoxProps {
  onSearch(term: string): void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  return (
    <form
      className={styles["search-box"]}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
    >
      <div className={styles["search-box-input"]}>
        <WorkOutlineIcon />
        <input
          type="text"
          placeholder="Title, companies, expertise or benifits"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
