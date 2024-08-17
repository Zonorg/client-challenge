"use client";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import ApiPosts from "./components/api-posts";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      router.push("/accounts/login");
    }
  }, []);



  return (
    <div className="home">
      <h2 className="text-center text-xl font-semibold">Publicaciones de la API</h2>
      <ApiPosts />
    </div>
  );
}
