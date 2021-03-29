import RightIcon from "mdi-react/ChevronRightIcon";
import EllipsesIcon from "mdi-react/DotsHorizontalIcon";
import styles from "./pagination.module.css";

interface PaginationHasNextProps {
  value: number;
  onSet(): void;
  onIncrement(): void;
}

export const PaginationHasNext: React.FC<PaginationHasNextProps> = ({
  value,
  onSet,
  onIncrement,
}) => {
  const more = `${styles["pagination-button"]} ${styles.more}`;

  return (
    <>
      <div className={styles["pagination-button"]} onClick={onSet}>
        <span>{value}</span>
      </div>
      <div className={more}>
        <EllipsesIcon />
      </div>

      <div className={styles["pagination-button"]} onChange={onIncrement}>
        <RightIcon />
      </div>
    </>
  );
};
