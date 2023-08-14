// import React, { useContext, useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import { formatISO9075 } from "date-fns";
// import TableOfContents from "../components/TOC";
// import RelatedPost from "../components/RelatedPost";
// import CommentList from "../components/CommentList";
// import CommentForm from "../components/CommentForm";
// import usePostInfo from "../hooks/usePostInfo";
// import useTags from "../hooks/useTags";
// import useComments from "../hooks/useComments";
// import usePostContent from "../hooks/usePostContent";
// import useRelatedPosts from "../hooks/useRelatedPosts";

// import "../styles/PostPage.css";
// import { FaTags } from "react-icons/fa";

// export default function PostPage() {
//   const { id } = useParams();
//   const { userInfo } = useContext(UserContext);
//   const { postInfo } = usePostInfo(id);
//   const tags = useTags();
//   const { comments, setComments } = useComments(id);
//   const { postContent } = usePostContent(id);
//   const { relatedPosts } = useRelatedPosts(id);

//   const [newCommentData, setNewCommentData] = useState({
//     autor: "",
//     contenido: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCommentData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();

//     const newComment = {
//       ...newCommentData,
//       postId: id,
//     };

//     fetch(`${process.env.REACT_APP_URL}/post/${id}/comment`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newComment),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setComments((prevComments) => [...prevComments, data]);
//         setNewCommentData({ autor: "", contenido: "" });
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//       });
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id, postInfo]);

//   if (!postInfo) return null;

//   return (
//     <>
//       <div className="post-page">
//         <div className="image">
//           <img src={`${process.env.REACT_APP_URL}/${postInfo.cover}`} alt="" />
//         </div>
//         <div className="headers">
//           <h1>{postInfo.title}</h1>
//           <div className="h-text">
//             <time>
//               {formatISO9075(new Date(Date.parse(postInfo.createdAt)))}
//             </time>

//             <div className="author">
//               by&nbsp;
//               <Link className="author" to={"/about"}>
//                 {postInfo.author.username}
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="toc-content">
//           <div className="toc-tags">
//             <div className="tags">
//               <strong className="related-tags">
//                 <FaTags className="tags-icon" /> Tags:
//               </strong>

//               <br />
//               {postInfo.tag.map((associatedTag, index) => (
//                 <span key={associatedTag._id} className="tag">
//                   <Link
//                     className="linkedTags"
//                     to={`/tags/${associatedTag._id}`}
//                   >
//                     {associatedTag.title}
//                   </Link>
//                   {index !== postInfo.tag.length - 1 && ", "}
//                 </span>
//               ))}
//             </div>
//             {postContent && <TableOfContents content={postInfo.content} />}
//           </div>
//           <div
//             className="content"
//             dangerouslySetInnerHTML={{ __html: postInfo.content }}
//           />
//         </div>
//         <div>
//           <h2 className="RpostTitle">Related Posts</h2>
//           <div className="related-posts-section">
//             {relatedPosts.map((post) => (
//               <RelatedPost key={post._id} post={post} />
//             ))}
//           </div>
//         </div>

//         <CommentList comments={comments} />

//         {userInfo && (
//           <CommentForm
//             newCommentData={newCommentData}
//             handleInputChange={handleInputChange}
//             handleCommentSubmit={handleCommentSubmit}
//           />
//         )}
//       </div>
//     </>
//   );
// }

import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { formatISO9075 } from "date-fns";
import TableOfContents from "../components/TOC";
import RelatedPost from "../components/RelatedPost";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import usePostInfo from "../hooks/usePostInfo";
import useTags from "../hooks/useTags";
import useComments from "../hooks/useComments";
import useRelatedPosts from "../hooks/useRelatedPosts";

import "../styles/PostPage.css";
import { FaTags } from "react-icons/fa";

export default function PostPage() {
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  const { postInfo } = usePostInfo(id);
  const tags = useTags();
  const { comments, setComments } = useComments(id);
  const { relatedPosts } = useRelatedPosts(id);

  const [newCommentData, setNewCommentData] = useState({
    autor: "",
    contenido: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCommentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      ...newCommentData,
      postId: id,
    };

    fetch(`${process.env.REACT_APP_URL}/post/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments((prevComments) => [...prevComments, data]);
        setNewCommentData({ autor: "", contenido: "" });
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, postInfo]);

  if (!postInfo) return null;

  return (
    <>
      <div className="post-page">
        <div className="image">
          <img src={`${process.env.REACT_APP_URL}/${postInfo.cover}`} alt="" />
        </div>
        <div className="headers">
          <h1>{postInfo.title}</h1>
          <div className="h-text">
            <time>
              {formatISO9075(new Date(Date.parse(postInfo.createdAt)))}
            </time>

            <div className="author">
              by&nbsp;
              <Link className="author" to={"/about"}>
                {postInfo.author.username}
              </Link>
            </div>
          </div>
        </div>

        <div className="toc-content">
          <div className="toc-tags">
            <div className="tags">
              <strong className="related-tags">
                <FaTags className="tags-icon" /> Tags:
              </strong>

              <br />
              {postInfo.tag.map((associatedTag, index) => (
                <span key={associatedTag._id} className="tag">
                  <Link
                    className="linkedTags"
                    to={`/tags/${associatedTag._id}`}
                  >
                    {associatedTag.title}
                  </Link>
                  {index !== postInfo.tag.length - 1 && ", "}
                </span>
              ))}
            </div>
            {postInfo.content && <TableOfContents content={postInfo.content} />}
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          />
        </div>
        <div>
          <h2 className="RpostTitle">Related Posts</h2>
          <div className="related-posts-section">
            {relatedPosts.map((post) => (
              <RelatedPost key={post._id} post={post} />
            ))}
          </div>
        </div>

        <CommentList comments={comments} />

        {userInfo && (
          <CommentForm
            newCommentData={newCommentData}
            handleInputChange={handleInputChange}
            handleCommentSubmit={handleCommentSubmit}
          />
        )}
      </div>
    </>
  );
}
