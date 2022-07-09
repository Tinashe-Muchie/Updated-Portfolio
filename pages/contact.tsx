import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/contact.module.css";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { PROJECT_IMAGE } from "../components/ProjectImage";

const submitContactForm = async (e: React.FormEvent) => {
  e.preventDefault();
};

const ContactPage = () => (
  <Layout title="contact-page">
    <main className={styles.container}>
      <form
        className={styles.contact_form}
        id="contact_form"
        method="POST"
        onSubmit={submitContactForm}
      >
        <div className={styles.contact_form_items}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            name="firstName"
            required
          />
        </div>
        <div className={styles.contact_form_items}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            name="lastName"
            required
          />
        </div>
        <div className={styles.contact_form_items}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            name="email"
            required
          />
        </div>
        <div className={styles.contact_form_items}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div>
          <button type="submit" value="Submit">
            Send
          </button>
        </div>
      </form>
      <span>You can also contact me via social media:</span>
      <ul>
        <li>
          <Link href="/">
            <a>
              {" "}
              <FaGithub />{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              {" "}
              <FaLinkedinIn />{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              {" "}
              <FaTwitter />{" "}
            </a>
          </Link>
        </li>
      </ul>
      <span>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </span>
    </main>
  </Layout>
);

export default ContactPage;
