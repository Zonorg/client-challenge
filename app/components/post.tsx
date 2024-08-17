import { IPost } from "@/types";
import DeletePost from "./delete-post";

type PostProps = {
  post: IPost;
  onDelete?: () => void;
};

const Post = ({ post, onDelete }: PostProps) => {
  const { userId, title, body } = post || {};

  // Función para truncar el texto si es más largo que el límite
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <tr>
      <td>{userId ? userId : "N/A"}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{truncateText(body, 30)}</td>
      {typeof post.id !== "number" && onDelete && (
        <td>
          <DeletePost postId={post._id} onDelete={onDelete} />
        </td>
      )}
    </tr>
  );
};

export default Post;
