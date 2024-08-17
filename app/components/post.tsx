import { IPost } from "@/types";
import DeletePost from "./delete-post";
import EditMode from "./edit-post";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";

type PostProps = {
  post: IPost;
  onDelete?: () => void;
  onUpdate?: () => void; // Función para actualizar los datos después del PUT
};

export default function Post({ post, onDelete, onUpdate }: PostProps) {
  const { userId, title, body } = post || {};
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleRowClick = () => {
    if (!isEditing) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onUpdate) {
      onUpdate(); // Refrescar los datos después de guardar
    }
  };

  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <tr>
      <td>{userId ? userId : "N/A"}</td>
      {isEditing ? (
        <EditMode post={post} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <td className="cursor-pointer" onClick={handleRowClick}>
            {isExpanded ? title : truncateText(title, 30)}
          </td>
          <td className="cursor-pointer" onClick={handleRowClick}>
            {isExpanded ? body : truncateText(body, 30)}
          </td>
          {typeof post.id !== "number" && onDelete && (
            <td className="flex flex-col gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                onClick={handleEdit}
              >
                Editar <BsPencilSquare />
              </button>
              <DeletePost postId={post._id} onDelete={onDelete} />
            </td>
          )}
        </>
      )}
    </tr>
  );
}
