import { gql, useQuery } from "@apollo/client";
import React from "react";

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

export const Dishes = () => {
  const { data, error, loading } = useQuery<DishQueryType>(QUERY);
  if (error) return <div>ooops</div>;
  if (loading) return <div>...loading</div>;

  return (
    <div>
      {data?.dishes.map(d => (
        <p key={d.id}>
          {d.title} created by {d.author.firstName}
        </p>
      ))}
    </div>
  );
};
