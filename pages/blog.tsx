import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/blog.module.css";

const BlogPage = () => (
  <Layout title="blog-page">
    <main className={styles.container}>
      <h2> Blog Page </h2>
      <p>This is the blog page</p>
      <span>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </span>
    </main>
  </Layout>
);

export default BlogPage;
