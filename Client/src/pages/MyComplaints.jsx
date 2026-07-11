import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import api from "../services/api";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await api.get("/complaints");
      setComplaints(res.data.complaints);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load complaints");
    }
  };

  const editComplaint = (complaint) => {
    setEditingId(complaint._id);
    setTitle(complaint.title);
    setCategory(complaint.category);
    setDescription(complaint.description);
  };

  const updateComplaint = async () => {
    try {
      await api.put(`/complaints/${editingId}`, {
        title,
        category,
        description,
      });

      toast.success("Complaint Updated Successfully");

      setEditingId(null);
      setTitle("");
      setCategory("");
      setDescription("");

      fetchComplaints();
    } catch (err) {
      toast.error("Update Failed");
    }
  };

  const deleteComplaint = async (id) => {
    try {
      await api.delete(`/complaints/${id}`);

      toast.success("Complaint Deleted Successfully");

      fetchComplaints();
    } catch (err) {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="hero">
      <div className="complaints-card">

        <h1>My Complaints</h1>

        {/* Search & Filter */}

        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Search complaints..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>

        </div>

        {/* Edit Form */}

        {editingId && (

          <div className="login-card">

            <h2>Edit Complaint</h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Technical</option>
              <option>Billing</option>
              <option>Service</option>
              <option>Other</option>
            </select>

            <br /><br />

            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <br /><br />

            <button onClick={updateComplaint}>
              Update Complaint
            </button>

          </div>

        )}

        <table className="complaint-table">

          <thead>

            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {complaints
              .filter((complaint) =>
                complaint.title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .filter((complaint) =>
                statusFilter === "All"
                  ? true
                  : complaint.status === statusFilter
              )
              .map((complaint) => (

                <tr key={complaint._id}>

                  <td>{complaint.title}</td>

                  <td>{complaint.category}</td>

                  <td>{complaint.status}</td>

                  <td>

                    <button
                      onClick={() => editComplaint(complaint)}
                    >
                      Edit
                    </button>

                    {" "}

                    <button
                      onClick={() => deleteComplaint(complaint._id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default MyComplaints;