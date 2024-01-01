// BlogList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from './BlogData';
import Topbanner from './banner';
import ReactPaginate from 'react-paginate';

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 9;
  const offset = currentPage * blogsPerPage;
  const pageCount = Math.ceil(blogData.length / blogsPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <Topbanner />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogData.slice(offset, offset + blogsPerPage).map((post) => (
            <div key={post.id} className="mb-4">
              <Link to={`/blogs/${post.id}`}>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={post.author.image}
                    alt={`${post.author.name}'s profile`}
                    className="w-full h-32 object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm">{post.date}</p>
                  <p className="text-gray-800 line-clamp-3 mb-5">{post.content}</p>
                  <Link to={`/blogs/${post.id}`} className="text-blue-500 hover:underline">
                    Read More
                  </Link>
                  <div className="mt-2 text-gray-500">
  {console.log('post.comments', post.comments)}
  {post.comments && post.comments.length > 0
    ? `${post.comments.length} Comments`
    : 'No Comments'}
</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex items-center gap-5 justify-center py-8 '}
          subContainerClassName={'pages pagination'}
          activeClassName={'active bg-primary text-white px-2 py-1 rounded-full'}
        />
      </div>
    </div>
  );
};

export default BlogList;
