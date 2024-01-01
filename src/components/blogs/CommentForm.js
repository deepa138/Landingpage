// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit({ name: 'User', comment });
    setComment('');

    // Clear comment input after submission
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
        Add a Comment
      </label>
      <div className="mt-1">
        <textarea
          id="comment"
          name="comment"
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
