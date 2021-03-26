import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from "react";
import styles from "./job.module.css";

export interface JobImageInterface
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  size: number;
}

export const JobImage: React.FC<JobImageInterface> = ({ size, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const shouldDisplay = loaded ? "block" : "none";
  const containerStyle = {
    height: size,
    width: size,
  };
  const placeholderStyle = {
    ...containerStyle,
    fontSize: `${size / (1 / 5)}px`,
    lineHeight: `${size}px`,
  };

  return (
    <div className={styles["image-container"]} style={containerStyle}>
      {!loaded && (
        <div className={styles["image-placeholder"]} style={placeholderStyle}>
          not found
        </div>
      )}
      {hydrated && (
        <img
          {...props}
          style={{ display: shouldDisplay }}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};
