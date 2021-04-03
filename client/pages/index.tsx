import { from } from "@apollo/client";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Dishes } from "../components/dishes";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dishes />
    </div>
  );
}
