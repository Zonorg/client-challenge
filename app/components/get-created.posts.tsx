"use client";

import { API_URL } from "@/config/site";
import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./post";
import { IPost } from "@/types";

export default function GetCreatedPosts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const getPosts = async () => {
    try {
      const response = await axios.get(API_URL + "/created-posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <table className="table">
        <thead>
          <tr>
            <th>ID Usuario</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Post key={post.id} post={post} onDelete={getPosts}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
