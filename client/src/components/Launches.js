import React from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";

function Launches() {
  const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
      launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
  `;

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map((launch) => (
    <LaunchItem key={launch.flight_number} launch={launch} />
  ));
}

export default Launches;
