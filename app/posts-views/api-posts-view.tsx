"use client";

import { API_URL } from "@/config/site";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { IPost } from "@/types";
import Post from "../components/post";
import Pagination, { limit } from "../components/pagination";
import { LuLoader2 } from "react-icons/lu";
import FilterInput from "../components/filter-input";

export default function ApiPosts() {
  const router = useRouter();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      router.push("/accounts/login");
    }
  }, []);

  const getPosts = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get<IPost[]>(API_URL + `/posts?_page=${page}&_limit=${limit}`);
      setPosts(response.data);
      setFilteredPosts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts(page);
  }, [page]);

  return (
    <div className="content">
      <h2 className="text-center text-xl font-semibold">Publicaciones de la API</h2>

      <FilterInput data={posts} filterKeys={["title", "body"]} onFilter={setFilteredPosts} />

      <Pagination page={page} setPage={setPage} />

      {loading ? (
        <div>
          <LuLoader2 size={32} className="animate-spin text-blue-500 mt-8" />
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID Usuario</th>
              <th>Título</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
