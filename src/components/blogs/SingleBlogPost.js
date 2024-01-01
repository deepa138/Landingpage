// SingleBlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from './BlogData';
import Topbanner from './banner';
import CommentForm from './CommentForm';

const SingleBlogPost = () => {
    const { postId } = useParams();
    const post = blogData.find((p) => p.id === parseInt(postId, 10));
    const [comments, setComments] = useState(post.comments || []);
    const [showPopup, setShowPopup] = useState(false);
  
    useEffect(() => {
      // Load comments from local storage when the component mounts
      const storedComments = JSON.parse(localStorage.getItem(`blog_${postId}_comments`)) || [];
      console.log('Loaded comments:', storedComments); // Add this log
      setComments(storedComments);
    }, [postId]);
  
    const handleCommentSubmit = (newComment) => {
      const updatedComments = [...comments, newComment];
      console.log('Updated comments:', updatedComments); // Add this log
      setComments(updatedComments);
      
      // Save comments to local storage
      localStorage.setItem(`blog_${postId}_comments`, JSON.stringify(updatedComments));
      console.log('Comments saved to local storage'); // Add this log
  
      // Show the popup
      setShowPopup(true);
    };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <Topbanner />
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-40 xl:px-14 md:px-14 lg:px-5">
        <div className="lg:flex">
          <div className="bg-white p-4 lg:w-8/12">
            <img
              src={post.author.image}
              alt={`${post.author.name}'s profile`}
              className="object-cover mb-4 rounded-md"
            />
            <div className="meta-data sm:flex gap-3">
              <p className="text-gray-600 text-sm mb-2">{post.author.name}</p>
              <p className="text-gray-600 text-sm mb-2"> {post.date}</p>
            </div>
            <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-800 mb-4">{post.content}</p>
            <div>
              <h3 className="text-xl font-bold mb-2">Comments</h3>
              {comments.length > 0 ? (
                <ul className="list-disc ml-6">
                  {comments.map((comment, index) => (
                    <li key={index} className="mb-2">
                      <strong>{comment.name}:</strong> {comment.comment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
            <CommentForm onCommentSubmit={handleCommentSubmit} />
          </div>
          <div className="bg-white p-4 lg:w-4/12"></div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-x-0  top-0 flex items-center justify-center ">
          <div className="p-8 rounded shadow-lg relative bg-primary text-white">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-green-500 font-bold">Comment submitted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlogPost;
