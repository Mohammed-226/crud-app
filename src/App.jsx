import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import CreatePosts from "./Components/CreatePosts";
import EditPost from "./Components/EditPost";
import DeletePost from "./Components/DeletePost";

const App = () => {
  return (
    <Router>
      <section>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create-post" element={<CreatePosts />}></Route>
            <Route path="/edit-post/:id" element={<EditPost />}></Route>
            <Route path="/delete-post/:id" element={<DeletePost />}></Route>
          </Routes>
        </main>
        <footer></footer>
      </section>
    </Router>
  );
};

export default App;
