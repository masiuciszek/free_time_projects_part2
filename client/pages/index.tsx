import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  {
    dishes {
      id
      dishType
      title
      rating
      author {
        firstName
        lastName
        email
      }
    }
  }
`;

interface Dish {
  id: number;
  dishType: string;
  title: string;
  rating: string;
  author: {
    firstName: string;
    lastName: string;
    email: string;
  };
}
interface DishQueryType {
  dishes: Dish[];
}

export default function Home() {
  const { data, error, loading } = useQuery<DishQueryType>(QUERY);

  if (error) return <div>ooops</div>;
  if (loading) return <div>...loading</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data?.dishes.map(d => (
        <p key={d.id}>{d.title}</p>
      ))}
    </div>
  );
}
