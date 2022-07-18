import Head from "next/head";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <div className={styles.contact}>
        <h1>Siga-nos em nossas redes sociais</h1>
        <div className={styles.social}>
          <button>Instagram</button>
          <button>Facebook</button>
          <button>Twitter</button>
        </div>
        <p>
          Ou contate-nos através do número <span>+00 000000000</span>
        </p>
      </div>
    </>
  );
}
