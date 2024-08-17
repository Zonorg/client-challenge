import { useState } from "react";
import axios from "axios";
import { IPost } from "@/types";
import { API_URL } from "@/config/site";

type EditModeProps = {
  post: IPost;
  onSave: () => void;
  onCancel: () => void;
};

export default function EditMode({ post, onSave, onCancel }: EditModeProps) {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);

  const handleSave = async () => {
    try {
      await axios.put(`${API_URL}/posts/${post._id}`, {
        title: editedTitle,
        body: editedBody,
      });
      onSave();
    } catch (error) {
      console.error("Error updating the post:", error);
    }
  };

  return (
    <>
      <td>
        <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
      </td>
      <td>
        <input type="text" value={editedBody} onChange={(e) => setEditedBody(e.target.value)} />
      </td>
      <td className="flex flex-col gap-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>
          Guardar
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>
          Cancelar
        </button>
      </td>
    </>
  );
}
