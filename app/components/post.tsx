import { IPost } from "@/types";

type PostProps = {
  post: IPost;
};

const Post = ({ post }: PostProps) => {
  const { userId, title, body } = post || {};

  return (
    <tr>
      <td>{userId}</td>
      <td>{title.slice(0, 20)}...</td>
      <td>{body.slice(0, 25)}...</td>
    </tr>
  );
};

export default Post;
