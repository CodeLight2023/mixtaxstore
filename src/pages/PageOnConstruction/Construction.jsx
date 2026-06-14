import { Link } from "react-router-dom"
import { assets } from "../../data/data"
import './Construction.css'
function Construction() {
  return (
    <div className="construction-container">
        <div className="construction">
          <div className="const-img">
            <img src={assets.InConstruction} alt="" />
          </div>
          <Link to="/">Back To Safety</Link>
        </div>
    </div>
  )
}

export default Construction