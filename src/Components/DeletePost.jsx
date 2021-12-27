import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "../Axios";
import { useEffect } from "react";

const DeletePost = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    title: "",
    author: "",
    loading: false,
  });
  let { title, author, loading } = state;

  useEffect(() => {
    let fetchPosts = async () => {
      let deleteData = await Axios.get(`/posts/${id}`);
      setState(deleteData.data);
    };
    fetchPosts();
  }, [id]);
  let handleClick = async () => {
    await Axios.delete(`/posts/${id}`);
    navigate("/");
  };

  return (
    <div className="removeBlock">
      <aside>
        <div className="float-left">
          <h2 className="h4">
            {title}
            <span className="text-success">{author}</span>
          </h2>
        </div>
        <div className="float-right">
          <button className="btn btn-danger" onClick={handleClick}>
            Delete
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </aside>
    </div>
  );
};

export default DeletePost;
