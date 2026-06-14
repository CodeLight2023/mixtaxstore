// pages/Error/Error.jsx
import { Link, useRouteError } from "react-router-dom";
import './Error.css'

function Error() {
  const error = useRouteError();


  return (
    <div className="error-container">
        <div className="error-box">
            <h1>Oops!</h1>
            <h3>{error.status}</h3>
            <p>{error.statusText}</p>
            <Link to='/'> Home </Link>
        </div>
    </div>
  );
}

export default Error;