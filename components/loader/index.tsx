import RefreshIcon from "mdi-react/RefreshIcon";
import styles from "./loader.module.css";

export const Loader: React.FC<{}> = () => (
  <RefreshIcon className={styles.load} />
);
