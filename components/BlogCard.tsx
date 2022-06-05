import Link from "next/link";
import Image from "next/image";

type Props = {
  id: number;
  slug: string;
  title: string;
  dateAndTime: string;
  coverPhoto: string;
  Author: string;
};

export const BlogCard = ({
  id,
  slug,
  title,
  dateAndTime,
  coverPhoto,
  Author
}: Props) => {
  return (
    <Link href="/blog">
      <a>
        <main>
          <Image src={"url"} width={250} height={250} />
          <span>{title}</span>
          <section>
            <div>
              <span>{Author}</span>
              <span>{Author}</span>
            </div>
            <span>{dateAndTime}</span>
          </section>
        </main>
      </a>
    </Link>
  );
};