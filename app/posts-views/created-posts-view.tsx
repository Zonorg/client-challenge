"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CreatePost from "../components/create-post";
import GetCreatedPosts from "../components/get-created-posts";

export default function CreatedPosts() {
  const [refreshKey, setRefreshKey] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      router.push("/accounts/login");
    }
  }, []);

  const handlePostCreated = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Incrementar el key para forzar la actualización
  };

  return (
    <div className="content">
      <h2 className="text-center text-xl font-semibold mt-2">Publicaciones creadas</h2>
      <div className="flex items-top justify-center gap-5 max-lg:flex-col max-lg:items-center">
        <CreatePost onPostCreated={handlePostCreated} />
        <GetCreatedPosts key={refreshKey} />
      </div>
    </div>
  );
}
