import { IPost } from "@/types";
import DeletePost from "./delete-post";
import { useState } from "react";

type PostProps = {
  post: IPost;
  onDelete?: () => void;
};

const Post = ({ post, onDelete }: PostProps) => {
  const { userId, title, body } = post || {};
  const [isExpanded, setIsExpanded] = useState(false);

  // Función para manejar el click en la fila
  const handleRowClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Función para truncar el texto si es más largo que el límite
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <tr onClick={handleRowClick} className="cursor-pointer">
      <td>{userId ? userId : "N/A"}</td>
      <td>{isExpanded ? title : truncateText(title, 30)}</td>
      <td>{isExpanded ? body : `${body.slice(0, 30)}...`}</td>
      {typeof post.id !== "number" && onDelete && (
        <td>
          <DeletePost postId={post._id} onDelete={onDelete} />
        </td>
      )}
    </tr>
  );
};

export default Post;
