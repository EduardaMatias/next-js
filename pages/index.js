import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Head>
          <title>Home</title>
        </Head>
        <h1>Hello World Next.js</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
      <Image src="/images/city.jpg" width="250px" height="350px" alt="Cidade" />
    </>
  )
}
