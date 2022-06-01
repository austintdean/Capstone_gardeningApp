import React from "react"
import { useNavigate, useParams} from "react-router-dom"
import axios from "axios"

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


// const PlantId = () => {
//     const{plantId} = useParams()
//     return (
//         plantId
//     )
// }

const AddPlantsPage = (props) => {
    
    const{plantId} = useParams()
    let initialValues = {
        plant_id : plantId,
        date_planted: "",
        is_harvested: false,
    
    };

    const [user, token] = useAuth();
    const navigate = useNavigate();
    const[formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewPlant);
    
    async function postNewPlant (){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/plants/", formData, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    
    return (  
        <div>
            <form onSubmit={handleSubmit}> 
            <label>
                date_planted:{""}
                <input type="date" name="date_planted" value={formData.date_planted} onChange={handleInputChange} />
            </label>
            <button>Add Plant!</button>
            </form>
        </div>
    );
}
 
export default AddPlantsPage;