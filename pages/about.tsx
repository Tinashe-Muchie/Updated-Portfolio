import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/about.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

const AboutPage = () => (
  <Layout title="About">
    <main className={styles.container}>
      <h2> About Me </h2>
      <p>
        {" "}
        Hi! My interest in programming piqued when i had to do a modeling module
        in college that required me to use C++. I did not have enough time to
        delve deep into the subject as i was completing my
        <span> mechanical engineering</span> degree. When Covid hit, all of a
        sudden i had time to spare. This is when i decided to pursue{" "}
        <span> front-end development </span> as it allowed me to see, in real
        time, what i was developing.
        <br />
        <br />I am now looking for a full-time role where i can contribute my
        skills.
      </p>
      <p>
        Below are some of the technologies that i have worked with recently:
      </p>
      <section className={styles.tech_table}>
        <div className={styles.right_column}>
          <div>
            <span>
              {" "}
              <FaArrowCircleRight className={styles.icons} />{" "}
            </span>
            <span> Javascript ES6+ </span>
          </div>
          <div>
            <span>
              {" "}
              <FaArrowCircleRight className={styles.icons} />{" "}
            </span>
            <span> React </span>
          </div>
          <div>
            <span>
              {" "}
              <FaArrowCircleRight className={styles.icons} />{" "}
            </span>
            <span> Node </span>
          </div>
        </div>
        <div className={styles.left_column}>
          <div>
            <span>
              {" "}
              <FaArrowCircleRight className={styles.icons} />{" "}
            </span>
            <span> Typescript </span>
          </div>
          <div>
            <span>
              {" "}
              <FaArrowCircleRight className={styles.icons} />{" "}
            </span>
            <span> GraphQL </span>
          </div>
          <div>
            <span>
              {" "}
              <FaArrowCircleRight className={styles.icons} />{" "}
            </span>
            <span> MongoDB </span>
          </div>
        </div>
      </section>
      <div className={styles.img}>
        <Image
          src="/Webp.net-resizeimage.png"
          width={170}
          height={200}
          className={styles.image}
        />
      </div>
      <span className={styles.home_page}>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </span>
    </main>
  </Layout>
);

export default AboutPage;
