import React, { useState , useEffect} from 'react';




const DateTimeTracker = (props) => {
     
    const [date, setDate] = useState([])
    const [plantDate, setPlantDate] = useState([])
    
    function handleSubmit(event){
        event.preventDefault();
        let newDate = {
            date: ((date - plantDate) / (1000 * 60 * 60 * 24))
        };
        console.log('date', date)
        console.log('plantDate', plantDate)
        console.log('newDate', newDate)
        console.log('props.plant.date_planted', props.plant.date_planted)
        
    }
    
    
    useEffect(()=> {
        setPlantDate(new Date(props.plant.date_planted));
        
        
    },[props])

    
    
    return(
        <form onSubmit={handleSubmit}>
            {console.log('props', props)}
            <label>Date of Expected Harvest</label>
            <input type='date'  onChange={(event) => setDate(new Date(event.target.value))}></input>
            <button type='submit'>Check it out!</button>
        </form>
     )
    }


    export default DateTimeTracker;

// I am trying to be able to add months to a %d/%m/%Y format using provided field data