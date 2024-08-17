"use client";
import { API_URL } from "@/config/site";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

interface DeletePostProps {
  postId: string;
  onDelete: () => void; // Callback para refrescar los posts
}

export default function DeletePost({ postId, onDelete }: DeletePostProps) {
  const handleDelete = async () => {
    const isConfirmed = confirm("¿Deseas eliminar esta publicación?");
    if (!isConfirmed) return;
    try {
      const response = await axios.delete(API_URL + `/posts/${postId}`);
      if (response.status === 200) {
        onDelete();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
    >
      Eliminar <FaTrash />
    </button>
  );
}
