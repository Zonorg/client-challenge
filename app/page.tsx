"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ApiPosts from "./posts-views/api-posts-view";
import CreatedPosts from "./posts-views/created-posts-view";

export default function Home() {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = useState<"apiPosts" | "createPost">("apiPosts");

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      router.push("/accounts/login");
    }
  }, []);

  return (
    <div className="content">
      <div className="flex justify-center my-4">
        <button
          onClick={() => setSelectedComponent("apiPosts")}
          className={`px-4 py-2 mx-2 ${selectedComponent === "apiPosts" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Publicaciones de la API
        </button>
        <button
          onClick={() => setSelectedComponent("createPost")}
          className={`px-4 py-2 mx-2 ${selectedComponent === "createPost" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Publicaciones creadas
        </button>
      </div>

      {selectedComponent === "apiPosts" && <ApiPosts />}
      {selectedComponent === "createPost" && <CreatedPosts />}
    </div>
  );
}
