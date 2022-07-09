import Link from "next/link";
import Image from "next/image";
import styles from "../styles/blogCard.module.css";

type Props = {
  id: number;
  slug: string;
  title: string;
  dateAndTime: string;
  coverPhoto: string;
  author: string;
};

export const BlogCard = ({
  id,
  slug,
  title,
  dateAndTime,
  coverPhoto,
  author
}: Props) => {
  return (
    <Link href="/blog">
      <a className={styles.blogLink}>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image src={"/images/logo.png"} width={250} height={250} alt="" />
          </div>
          <div className={styles.content}>
            <span>{title}</span>
            <section>
              <div>
                <span>{author}</span>
                <span>{author}</span>
              </div>
              <span>{dateAndTime}</span>
            </section>
          </div>
        </div>
      </a>
    </Link>
  );
};