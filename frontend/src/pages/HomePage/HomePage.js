import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/plants/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPlants(response.data);
        alert('Make sure you water your plants!')
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchPlants();
  }, [token]);
  return (
    <div className="container">
      <h2>Home Page for {user.username}! Here are your plants!</h2>
      {plants &&
        plants.map((plant) => (
          <li key={plant.id}>
            {plant.plant.name}  Planted: {plant.date_planted}  Time to harvest: {plant.plant.time_to_harvest}
          </li>
        ))}
    </div>
  );
};

export default HomePage;
