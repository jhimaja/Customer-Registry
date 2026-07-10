import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {

  const [profile, setProfile] = useState({
    user: {},
    total: 0,
    pending: 0,
    resolved: 0,
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {

      const res = await api.get("/profile");

      setProfile(res.data);

    } catch (err) {
      alert("Failed to load profile");
    }
  };

  return (
    <div className="hero">
      <div className="login-card">

        <h1>My Profile</h1>

        <h3>Name</h3>
        <p>{profile.user.name}</p>

        <h3>Email</h3>
        <p>{profile.user.email}</p>

        <h3>Member Since</h3>
        <p>
        {profile.user.createdAt
        ? new Date(profile.user.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        })
        : "Loading..."}
        </p>
        <hr />

        <hr />

        <h3>Total Complaints</h3>
        <p>{profile.total}</p>

        <h3>Pending Complaints</h3>
        <p>{profile.pending}</p>

        <h3>Resolved Complaints</h3>
        <p>{profile.resolved}</p>

      </div>
    </div>
  );
}

export default Profile;