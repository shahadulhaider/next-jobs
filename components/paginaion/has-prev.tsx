import LeftIcon from "mdi-react/ChevronLeftIcon";
import EllipsesIcon from "mdi-react/DotsHorizontalIcon";
import styles from "./pagination.module.css";

interface PaginationHasPrevProps {
  value: number;
  onSet(): void;
  onDecrement(): void;
}

export const PaginationHasPrev: React.FC<PaginationHasPrevProps> = ({
  value,
  onSet,
  onDecrement,
}) => {
  const more = `${styles["pagination-button"]} ${styles.more}`;

  return (
    <>
      <div className={styles["pagination-button"]} onChange={onDecrement}>
        <LeftIcon />
      </div>
      {value >= 2 && (
        <div className={more}>
          <EllipsesIcon />
        </div>
      )}
      <div className={styles["pagination-button"]} onClick={onSet}>
        <span>{value}</span>
      </div>
    </>
  );
};
