import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/projects.module.css";

const ProjectsPage = () => (
  <Layout title="projects">
    <main className={styles.container}>
      <h2> Projects Page </h2>
      <section></section>
      <span>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </span>
    </main>
  </Layout>
);

export default ProjectsPage;
