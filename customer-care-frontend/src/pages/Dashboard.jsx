import { useEffect, useState } from "react";
import api from "../services/api";
import {
  FaClipboardList,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

function Dashboard() {

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
    inProgress: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await api.get("/dashboard");

      setStats(res.data);

    } catch (err) {

      alert("Failed to load dashboard");

    }

  };

  return (
    <div className="hero">

      <div className="dashboard-container">

        <h1>Customer Care Dashboard</h1>

        <div className="dashboard-cards">

          <div className="card total">
            <FaClipboardList className="dashboard-icon" />
            <h2>{stats.total}</h2>
            <h3>Total Complaints</h3>
          </div>

          <div className="card pending-card">
            <FaClock className="dashboard-icon" />
            <h2>{stats.pending}</h2>
            <h3>Pending</h3>
          </div>

          <div className="card resolved-card">
            <FaCheckCircle className="dashboard-icon" />
            <h2>{stats.resolved}</h2>
            <h3>Resolved</h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;