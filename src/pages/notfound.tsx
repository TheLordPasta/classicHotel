import { Link } from "react-router-dom";
import "../styles/notfound.css";

function NotFound() {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link className="link-text" to="/homePage">
        Go Back to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
