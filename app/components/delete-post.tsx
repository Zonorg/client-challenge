"use client";
import { API_URL } from "@/config/site";
import axios from "axios";

interface DeletePostProps {
  postId: string;
  onDelete: () => void; // Callback para refrescar los posts
}

export default function DeletePost({ postId, onDelete }: DeletePostProps) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(API_URL + `/posts/${postId}`);
      if (response.status === 200) {
        alert("Post eliminado");
        onDelete();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
      Eliminar
    </button>
  );
}
