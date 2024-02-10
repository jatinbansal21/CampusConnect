import { useEffect, useState } from "react";
import { getUser } from "../../../../api/course";

const TotalFeedbacks = ({ comment }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    const user = async () => {
      const response = await getUser(comment.user_id);
      setName(response.name);
    };
    user();
  }, [comment.user_id]);
  return (
    <div className="comment-preview">
      <img src={comment.image} alt="Comment" className="img_in_comment"></img>
      <div>
        <p className="comment_user">{name.toLowerCase()}</p>
        <p className="user_comment">{comment.text_body}</p>
      </div>
    </div>
  );
};

export default TotalFeedbacks;
