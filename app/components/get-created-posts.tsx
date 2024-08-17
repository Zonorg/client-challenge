"use client";

import { API_URL } from "@/config/site";
import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./post";
import { IPost } from "@/types";
import FilterInput from "./filter-input";

export default function GetCreatedPosts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(API_URL + "/created-posts");
      setPosts(response.data);
      setFilteredPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <FilterInput data={posts} filterKeys={["title", "body"]} onFilter={setFilteredPosts} />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post} onDelete={getPosts} onUpdate={getPosts}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
