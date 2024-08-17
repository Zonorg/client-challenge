"use client";

import { API_URL } from "@/config/site";
import axios from "axios";

type CreatePostProps = {
  onPostCreated: () => void; // Callback para llamar cuando se crea un post
};

export default function CreatePost({ onPostCreated }: CreatePostProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      const response = await axios.post(API_URL + "/posts", data);
      console.log(response);
      if (response.status === 201) {
        alert("Publicación creada correctamente");
        onPostCreated();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="data">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" placeholder="Nombre del post" />
        <textarea name="body" id="body" placeholder="Descripción" />
        <button type="submit">Crear publicación</button>
      </form>
    </div>
  );
}
