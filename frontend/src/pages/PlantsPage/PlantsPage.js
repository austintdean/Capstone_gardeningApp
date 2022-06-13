import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"



const PlantsPage = () => { 
    const [plants, setPlants] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPlants()
    },[])

    async function getAllPlants(){
        try { let response = await axios.get("http://127.0.0.1:8000/api/plants/all/");
        console.log(response.data);
        setPlants(response.data)
        
    } catch (error) {
        console.log(error.message)
    }
}



    const handleSubmit = (id) => {
        console.log(id)
        navigate(`/addplants/${id}/`)
    }    
    
    return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Seed Depth</th>
                    <th>Seed Spacing</th>
                    <th>Water Cycle</th>
                    <th>Water Amount</th>
                    <th>Time to Harvest</th>
                    <th>Season to plant</th>
                </tr>
            </thead>
            <tbody>
               {plants.map((plant) => {
                   return(
                       <tr key = {plant.id}>
                           <td>{plant.name}</td>
                           <td>{plant.seed_depth}</td>
                           <td>{plant.seed_spacing}</td>
                           <td>{plant.water_cycle}</td>
                           <td>{plant.water_amount}</td>
                           <td>{plant.time_to_harvest}</td>
                           <td>{plant.season}</td>
                           
                          <td><button  onClick= {() => handleSubmit(plant.id)} >Add Plant to Collection!</button></td> 
                       </tr>
                          

                   )
               })}
              
               
            </tbody>
            <tfoot>
                <nav>
                    <ul>
                        <Link to='spring/'>
                            <li>Spring Plants</li>
                        </Link>
                        <Link to='summer/'>
                            <li>Summer Plants</li>
                        </Link>
                        <Link to='fall/'>
                            <li>Fall Plants</li>
                        </Link>
                        <Link to='winter/'>
                            <li>Winter Plants</li>
                        </Link>
                    </ul>
                </nav>
            </tfoot>


        </table>
    </div>
)



}

export default PlantsPage