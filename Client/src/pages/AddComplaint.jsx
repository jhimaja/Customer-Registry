import { toast } from "react-toastify";
import { useState } from "react";
import api from "../services/api";

function AddComplaint() {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {

    try {

      const res = await api.post("/complaints", {
        title,
        category,
        description,
      });

      toast.success(res.data.message);

      setTitle("");
      setCategory("");
      setDescription("");

    } catch (err) {

  console.log(err);

  console.log(err.response);

  toast.error(err.response?.data?.message || "Failed to submit complaint");

}

  };

  return (
    <div className="hero">
      <div className="login-card">

        <h1>Register a Complaint</h1>

        <input
          type="text"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
>
          <option value="">Select Category</option>
          <option>Technical</option>
          <option>Billing</option>
          <option>Service</option>
          <option>Other</option>
        </select>

        <br /><br />

        <textarea
          rows="5"
          placeholder="Describe your complaint"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <br /><br />

        <button onClick={handleSubmit}>
          Submit Complaint
        </button>

      </div>
    </div>
  );
}

export default AddComplaint;