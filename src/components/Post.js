import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaBookmark, FaUser } from 'react-icons/fa';
import Sidebar from './Sidebar';
import NavBar from './NavBar';

const Post = ({ imgSrc, title, body, username }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLikeClick = () => setLikes(likes + 1);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    
    <div className="flex justify-center w-80 lg:w-full   py-2 px-0 md:pl-1 lg:pl-64 overflow-hidden">
      <div className="w-full max-w-lg rounded-lg shadow-md p-4 bg-black bg-opacity-60">
        {/* User Info Section */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <FaUser className="text-gray-500 text-2xl" />
          </div>
          <p className="ml-3 text-white font-semibold">{username}</p>
        </div>

        <div className="flex justify-center mb-4 rounded-xl p-10  border-[1px] border-[rgb(38,38,38)">
          <img
            src={imgSrc}
            alt="Post"
            className="w-full h-64 object-cover rounded"
            loading="lazy"
          />
        </div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-gray-300 mb-2 bo">{body}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <FaHeart
                className="text-red-500 cursor-pointer hover:scale-105 transition-transform"
                onClick={handleLikeClick}
              />
              <span className="ml-2 text-white">{likes}</span>
            </div>
            <div className="flex items-center">
              <FaComment className=" text-blue-500 cursor-pointer hover:scale-105 transition-transform" />
              <span className="ml-2 text-white">{comments.length}</span>
            </div>
          </div>
          <FaBookmark className="text-white cursor-pointer hover:scale-105 transition-transform" />
        </div>

        <div className="mt-4">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 bg-black border-gray-600 rounded-lg text-white"
            />
          </form>
          <div className="mt-2 space-y-1">
            {comments.map((comment, index) => (
              <p key={index} className="text-gray-300 text-sm">{comment}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
        const photosData = await photosResponse.json();

        const postsData = photosData.slice(0, 10).map((photo) => ({
          title: photo.title,
          body: "This is a post description",
          imgSrc: photo.url,
          username: "User" + Math.floor(Math.random() * 1000), // Random username for demo purposes
        }));

        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto flex bg-black text-white min-h-screen relative">
    
     <div >
       <NavBar />
     </div>

      {/* Main content area for posts */}
      <div className="flex-grow  p-4">
        {posts.map((post, index) => (
          <Post 
            key={index} 
            imgSrc={post.imgSrc} 
            title={post.title} 
            body={post.body} 
            username={post.username}  // Pass the username here
          />
        ))}
      </div>

      {/* Side on the right */}
     
      <div className="w-72 hidden lg:block lg:mb-28 left-0 h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default PostsPage;
