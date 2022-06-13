import React, { useState , useEffect} from 'react';




const DateTimeTracker = (props) => {
     
    function waterPlants(){
        let date = new Date();

        alert('It is time to water your plants!')

    }
    
     
   
    function handleSubmit(event){
        event.preventDefault();
       
       
        
        
        
        // console.log(daysTill);
        // console.log(plantDate);
        // console.log(finalDate);
        // console.log(newDate);
        
      
        
    }
    
    
    

    
    
    return(
        <form onSubmit={handleSubmit}>
            <label>Have you watered your plants?</label>
            <button type='submit' onClick={() => setTimeout(waterPlants, 86400000)}>Watered!</button>

        </form>
     )
    }


    export default DateTimeTracker;

// I am trying to be able to add months to a %d/%m/%Y format using provided field data