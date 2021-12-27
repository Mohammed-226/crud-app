import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "../Axios";
const EditPost = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    loading: false,
    title: "",
    author: "",
  });
  let { loading, title, author } = state;
  useEffect(() => {
    let fetchPosts = async () => {
      let existsData = await Axios.get(`/posts/${id}`);
      setState(existsData.data);
    };
    fetchPosts();
  }, [id]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { title, author };
      await Axios.put(`/posts/${id}`, payload);
      navigate("/");
    } catch (err) {}
    setState({ loading: false });
  };
  return (
    <section id="postsBlock" className="col-md-4 mx-auto bg-white p-4 mt-4">
      <article>
        <h2 className="h4 font-weight-bold text-success text-uppercase border-bottom">
          Update Post
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
          <button class="btn btn-success">Submit</button>
        </form>
      </article>
    </section>
  );
};

export default EditPost;
