
const DateTimeTracker = (props) => {
    
    let Day = datetime.timedelta(1)
    
    
    return ( 
   
            <table>
                <thead>
                    <tr>
                        <th>Expected Harvest Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.plants.map((plant) => {
                        <tr>
                            <td>{plant.date_planted + Day}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        )}
 
export default DateTimeTracker;