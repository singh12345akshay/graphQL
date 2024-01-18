import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query {
    launches {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
    }
  }
`;

const MyComponent = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data,"----------> Data");  

  return (
    <div>
      This is Div
    </div>
  );
};

export default MyComponent;
