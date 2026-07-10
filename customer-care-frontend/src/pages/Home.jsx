import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-card">
        <h1>Customer Care Registry</h1>

        <p>
          Welcome to our Customer Care Complaint Management System.
        </p>

        <p>
          Register complaints, track their status, and get quick support.
        </p>

        <div className="buttons">
          <Link to="/register">
            <button>Register Complaint</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;