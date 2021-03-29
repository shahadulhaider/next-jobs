import styles from "./search.module.css";

export interface SearchTypeProps {
  checked: boolean;
  onChange(checked: boolean): void;
}

export const SearchType: React.FC<SearchTypeProps> = ({
  checked,
  onChange,
}) => {
  const toggle = () => onChange(!checked);
  return (
    <>
      <input
        className={styles.checkbox}
        id="ft"
        type="checkbox"
        checked={checked}
        onChange={toggle}
      />
      <label htmlFor="ft">Full Time</label>
    </>
  );
};
