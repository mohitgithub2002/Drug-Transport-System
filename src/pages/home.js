import { useNavigate } from "react-router-dom";
import '../pages.css'
function Home (){

    const navigate = useNavigate();
  
    const settemplimit = () => {
        navigate('/settemplimit');
    }
    const manufacturer = () => {
        navigate('/manufacturer');
    }
    const carrier = () => {
        navigate('/carrier');
    }
    const drug = () => {
        navigate('/drug');
    }
    
    const viewdetails = () => {
        navigate('/viewdetails');
    }

return (
    
    <div className="field">
        <div className = "home-section">
        <button onClick={settemplimit} className="button" >Temperature Limit</button><br />
        <button onClick={manufacturer} className="button">Set Manufacturer</button><br />
        <button onClick={carrier} className="button">Set carrier</button><br />
        <button onClick={drug} className="button">Add Drug</button><br />
        {/* <button onClick={temperature} className="button">Verify Temperature</button><br /> */}
        <button onClick={viewdetails} className="button">View Details</button><br />
    </div>
    </div>
)
}

export default Home;