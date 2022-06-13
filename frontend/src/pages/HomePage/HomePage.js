import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import DateTimeTracker from "../../components/DateTimeTracker/DateTimeTracker";

import axios from "axios";
import RecommendList from "../../components/RecommendList/RecommendList";
import HarvestedPlants from "../../components/HarvestedPlants/HarvestedPlants";
import "./HomePage.css"



const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [plants, setPlants] = useState();
  const [change, setChange] = useState();

  useEffect(() => {
    
    fetchPlants();
  }, [token]);

  const fetchPlants = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/plants/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data)
        setPlants(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    function handleSubmit(event, id){
      event.preventDefault();
      changePlants(id);
    }
     

  const changePlants =  async(id) => {
    //make api request (PATCH request) to update to true it was harvested
   console.log('id',id)
    let harvestedPlant =
     {
      id: id,
      is_harvested: true
     }
    console.log(harvestedPlant)
    
     try {let response = await axios.patch(`http://127.0.0.1:8000/api/plants/change/${id}`, harvestedPlant,{
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response.data)
    fetchPlants();
       
     } catch (error) {
       console.log(error)

     }
    
    
  }


  return (
    <div className="content-plants">
      {plants &&
       <RecommendList plants = {plants}/>}
      <h2>Home Page for {user.username}! Here are your plants!</h2>
      {plants &&
        plants.map((plant) => (
         
          <li className = "list"key={plant.id}>
            {plant.plant.name}  Planted: {plant.date_planted}  Approximate time of harvest: {plant.plant.time_to_harvest}
            <DateTimeTracker />
            <form onSubmit={(e) =>handleSubmit(e, plant.id)}>
            <button type="submit" >Harvested</button>
            </form> 
            
          </li>
        ))}
        <HarvestedPlants plants = {plants}/>
        
    </div>
  );
};

export default HomePage;
