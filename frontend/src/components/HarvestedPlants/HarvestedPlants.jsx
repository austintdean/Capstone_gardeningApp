import React, { useState } from 'react';


const HarvestedPlants = (props) => {
    return (  
        <table className='table'>
            <thead>
                <tr>
                    <th>Harvested Plants</th>
                    
                </tr>
            </thead>
            <tbody>
               {props.plants && props.plants.map((plant) => {
                   console.log(plant.is_harvested)
               if(plant.is_harvested === true)
                   return(
                       <tr key = {plant.id}>
                           <td>{plant.plant.name}</td>
                        </tr>
                   )})}
              
               
            </tbody>
        </table>
    );
}
 
export default HarvestedPlants;