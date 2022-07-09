import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import { gql} from "@apollo/client";
import client from "../apolloClient";
import { BlogCard } from "../components/BlogCard";

interface blogpageIF {
  blogs: blogs_type;
}

const BlogPage = ({blogs}: blogpageIF) => {
  console.log(blogs);
  return (
    <Layout title="blog-page">
    <main className={styles.container}>
      <section className={styles.blog_section}>
        <BlogCard 
          id={1}
          slug={"read"}
          title={"why svelte is the future"}
          dateAndTime={"09-12-2009"}
          coverPhoto={"cover photo"}
          author={"Tinashe Muchineripi"}
        />
        <BlogCard 
          id={1}
          slug={"read"}
          title={"why svelte is the future"}
          dateAndTime={"09-12-2009"}
          coverPhoto={"cover photo"}
          author={"Tinashe Muchineripi"}
        />
        <BlogCard 
          id={1}
          slug={"read"}
          title={"why svelte is the future"}
          dateAndTime={"09-12-2009"}
          coverPhoto={"cover photo"}
          author={"Tinashe Muchineripi"}
        />
        <BlogCard 
          id={1}
          slug={"read"}
          title={"why svelte is the future"}
          dateAndTime={"09-12-2009"}
          coverPhoto={"cover photo"}
          author={"Tinashe Muchineripi"}
        />
        <BlogCard 
          id={1}
          slug={"read"}
          title={"why svelte is the future"}
          dateAndTime={"09-12-2009"}
          coverPhoto={"cover photo"}
          author={"Tinashe Muchineripi"}
        />
        <BlogCard 
          id={1}
          slug={"read"}
          title={"why svelte is the future"}
          dateAndTime={"09-12-2009"}
          coverPhoto={"cover photo"}
          author={"Tinashe Muchineripi"}
        />
        <BlogCard 
          id={1}
          slug={"read"}
          title={"why svelte is the future"}
          dateAndTime={"09-12-2009"}
          coverPhoto={"cover photo"}
          author={"Tinashe Muchineripi"}
        />
      </section>
      <span>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </span>
    </main>
  </Layout>
  ) 
}


export default BlogPage;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
    query MyQuery {
        blogs {
        id
        slug
        title
        dateAndTime
        coverPhoto {
            url
        }
        content {
            html
        }
        author {
            id
            name
            avatar {
            id
            url
            }
            blogs {
            title
            }
        }
        }
    }
`});

  return {
    props: {
      blogs: data?.blogs,
    },
  };
}

type blogs_type = Array<{ 
  __typename?: 'Blog', 
  id: string, 
  slug: string, 
  title: string, 
  dateAndTime: any, 
  coverPhoto: { 
    __typename?: 'Asset', 
    url: string 
  }, 
  content: { 
    __typename?: 'BlogContentRichText', 
    html: string 
  }, 
  author?: { 
    __typename?: 'Author', 
    id: string, 
    name: string, 
    avatar: { 
      __typename?: 'Asset', 
      id: string, 
      url: string }, 
      blogs: Array<{ 
        __typename?: 'Blog', 
        title: string }> 
      } | null }>
