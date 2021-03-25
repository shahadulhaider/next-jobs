import Image from "next/image";
import Link from "next/link";
import { Fragment, FC } from "react";
import Head from "next/head";
import styles from "./layout.module.css";

export const NotFoundLayout: FC<{}> = () => (
  <Fragment>
    <Head>
      <title>Github Jobs | 404 </title>
    </Head>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span className={styles["header-brand"]}> Github</span> Jobs{" "}
        </h1>
      </header>
      <main className={styles["not-found"]}>
        <Image src="/assets/Scarecrow.png" width={655} height={395} />
        <div>
          <h2>I have bad news for you</h2>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailabele
          </p>
          <Link href="/">
            <button className={styles["back-btn"]}>Back to homepage</button>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        Shahadul Haider @ DevChallenges.io
      </footer>
    </div>
  </Fragment>
);
