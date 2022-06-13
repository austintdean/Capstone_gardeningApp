import React, { useEffect, useState } from 'react';
import "./RecommendList.css"

const RecommendList = (props) => {
    
    const [ranPlant, setRanPlant] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //setResult(summerPlants(props.plants, "Summer"));
        if(props){
            // console.log('props in ue', props)
            let sum_plants = summerPlants(props.plants, "Summer")
            // console.log('sum_plants in useEffect', sum_plants)
            let randomPlant = sum_plants[Math.floor(Math.random()*sum_plants.length)];
            // console.log('randomPlant in useEffect', randomPlant)
            setRanPlant(randomPlant)
        }
        // console.log(props.plants)       
    }, [props])
    
    useEffect(() =>{
        if(ranPlant){
            setLoading(false)
            // console.log('ranPlant in loading Ue', ranPlant)
        }
    }, [ranPlant])


    function summerPlants(list, season){
    let RecommendPlants = list.filter((plant) => {
        if(plant.plant.season == season){
            return true
        }})
        return RecommendPlants
    }

    
    

    
    return (  
        <div>
        <table>
            <thead> 
                <tr> 
                    <th>Recommended Plant for the Summer!</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                {/* {console.log('ranPlant in render', ranPlant)} */}
                {/* {console.log('loading in render', loading)} */}
               <td> {!loading &&
               ranPlant.plant.name} </td>
            </tr>
        
           
            </tbody>
        </table>
        </div>
    );}
 
export default RecommendList;