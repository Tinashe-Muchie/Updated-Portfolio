import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {
  FaBloggerB,
  FaCommentDots,
  FaHome,
  FaRegClipboard,
  FaRegStar,
  FaLinkedinIn,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

type Props = {
  children?: ReactNode;
  title?: string;
};

const date = new Date();
const current_year = date.getFullYear();

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      <header className="main-header">
        <Image src="/images/logo.png" width={150} height={150} alt="" />
      </header>
      <nav>
        <ul className="main-nav">
          <li className="home">
            <Link href="/">
              <a>
                <FaHome className="icons" />
                <span> Home </span>
              </a>
            </Link>
          </li>
          <li className="nav-left">
            <Link href="/about">
              <a>
                <FaRegStar className="icons" />
                <span> About </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>
                <FaRegClipboard className="icons" />
                <span> Projects </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>
                <FaBloggerB className="icons" />
                <span> Blog </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>
                <FaCommentDots className="icons" />
                <span> Contact </span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <ul className="social_media">
          <li>
            <Link href="/">
              <a>
                {" "}
                <FaTwitter />
              </a>
            </Link>
          </li>
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
        </ul>
        <div>&copy; Tinashe Muchineripi. {current_year}</div>
      </footer>
    </div>
  </div>
);

export default Layout;
