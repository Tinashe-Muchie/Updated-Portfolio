import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";

const IndexPage = () => (
  <Layout title="tinashemuchineripi">
    <div className={styles.wrapper}>
      <span className={styles.first_of_span}> Hi, my name is </span>
      <h2> Tinashe Muchineripi. </h2>
      <span className={styles.last_of_span}>
        {" "}
        I enjoy building products that reside on the web, writing about how to build products
        that reside on the web.
      </span>
      <ul className={styles.blog_cv_links}>
        <li>
          <Link href="/blog">
            <a>Check out the latest blog post !</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Download CV</a>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
