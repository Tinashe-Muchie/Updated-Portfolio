import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import { useQuery, ApolloError } from "@apollo/client";
import { BLOGS } from "../queries/blogsQuerie";
import { MyQueryQuery } from "../src/generated/graphql";

interface blogpageIF {
  blogs: blogs_type;
  loading: boolean;
  error: ApolloError;
}

const BlogPage = ({blogs, loading, error }: blogpageIF) => (
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

export async function getServerSideProps() {
  const { loading, error, data } = await useQuery<MyQueryQuery>(BLOGS);

  return {
    props: {
      blogs: data?.blogs,
      loading,
      error
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
