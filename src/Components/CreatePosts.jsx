import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../Axios";

const CreatePosts = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    author: "",
    loading: false,
  });
  let { title, author, loading } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { title, author };
      await Axios.post("/posts", payload);
      navigate("/");
    } catch (err) {}
    setState({ loading: false });
  };
  return (
    <section id="postsBlock" className="col-md-4 mx-auto bg-white p-4 mt-4">
      <article>
        <h2 className="h4 font-weight-bold text-success text-uppercase border-bottom">
          Create post
        </h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter title"
              onChange={handleChange}
              name="title"
              value={title}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Author</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter author"
              onChange={handleChange}
              name="author"
              value={author}
            />
          </div>
          <button className="btn btn-success">
            {loading ? "loading..." : "create"}
          </button>
        </form>
      </article>
    </section>
  );
};

export default CreatePosts;
