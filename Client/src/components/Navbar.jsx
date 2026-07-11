import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaTachometerAlt,
  FaPlusCircle,
  FaClipboardList,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    navigate("/login");

  };

  return (
    <nav className="navbar">

      <h2 className="logo">Customer Care</h2>

      <div className="nav-links">

        <Link to="/"><FaHome /> Home</Link>{" | "}

        {!token && (
          <>
            <Link to="/login"><FaSignInAlt /> Login</Link>{" | "}
            <Link to="/register"><FaUserPlus /> Register</Link>{" | "}
          </>
        )}

        {token && (
          <>
            <Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link>{" | "}
            <Link to="/add-complaint"><FaPlusCircle /> Add Complaint</Link>{" | "}
            <Link to="/my-complaints"><FaClipboardList /> My Complaints</Link>{" | "}
            <Link to="/profile">
  <FaUser /> Profile
</Link>

{" | "}

<button
  onClick={handleLogout}
  style={{
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "16px"
  }}
>
  Logout
</button>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "16px"
              }}
            >
              <FaSignOutAlt /> Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;