import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Anthony&apos;s Personal Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
