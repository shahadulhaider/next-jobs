import GlobeIcon from "mdi-react/GlobeIcon";
import { FormEvent, useState } from "react";
import styles from "./search.module.css";

export interface SearchLocationProps {
  location?: string;
  onChange(value: string): void;
}

export const SearchLocation: React.FC<SearchLocationProps> = ({
  location,
  onChange,
}) => {
  const [value, setValue] = useState("");
  const [selections, setSelections] = useState<string[]>([]);

  const handleNewLocation = (e: FormEvent) => {
    e.preventDefault();
    setSelections(Array.from(new Set([...selections, value])));
    onChange(value);
    setValue("");
  };

  return (
    <form onSubmit={handleNewLocation}>
      <h3 className={styles["location-header"]}>Location</h3>
      <div className={styles["location-input"]}>
        <GlobeIcon />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {selections.map((s) => (
        <div key={s}>
          <input
            type="radio"
            id={s}
            value={s}
            name="select"
            checked={s === location}
            onChange={(e) => onChange(e.target.value)}
          />
          <label htmlFor={s}>{s}</label>
        </div>
      ))}
    </form>
  );
};
