import { IPost } from "@/types";

type PostProps = {
  post: IPost;
};

const Post = ({ post }: PostProps) => {
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
    </tr>
  );
};

export default Post;
