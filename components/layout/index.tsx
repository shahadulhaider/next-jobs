import { Fragment, FC } from "react";
import Head from "next/head";
import styles from "./layout.module.css";

interface LayoutProps {
  title: string;
}

export const Layout: FC<LayoutProps> = ({ title, children }) => (
  <Fragment>
    <Head>
      <title>Github Jobs | {title}</title>
    </Head>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span className={styles["header-brand"]}> Github</span> Jobs{" "}
        </h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        Shahadul Haider @ DevChallenges.io
      </footer>
    </div>
  </Fragment>
);
