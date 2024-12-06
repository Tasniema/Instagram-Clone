import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaSearch, FaPlus, FaPlayCircle, FaUser } from 'react-icons/fa';
import videoData from './videos.json'; // Ensure this path is correct

// Footer Component
// eslint-disable-next-line react/prop-types
function Footer({ setSearchText, setShowPostForm, setShowVideos, scrollToFirstPost, navigateToHome }) {
  return (
    <footer className="fixed bottom-0 w-full flex justify-around items-center bg-black text-white p-4 border-t shadow-lg z-20">
      <FaHome className="text-white cursor-pointer" onClick={navigateToHome} />
      <FaSearch className="text-white cursor-pointer" onClick={() => setSearchText('')} />
      <FaPlus className="text-blue-500 cursor-pointer" onClick={() => setShowPostForm(true)} />
      <FaPlayCircle className="text-white cursor-pointer" onClick={() => setShowVideos(true)} />
      <FaUser className="text-white cursor-pointer" />
    </footer>
  );
}

// PostForm Component for adding a new post
const PostForm = ({ setShowPostForm, addPost }) => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ caption, image, video });
    setShowPostForm(false); // Hide the form after submission
  };

  return (
    <div className="flex fixed top-0 left-0 w-96 h-full bg-black bg-opacity-50 justify-center items-center z-10 ">
      <div className="bg-white p-6 rounded-lg w-96">
        <form onSubmit={handleSubmit}>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter caption"
            className="w-full p-2 mb-4"
          />
          <div className="mb-4">
            <label className="block text-sm mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
              className="w-full p-2 border"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Upload Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
              className="w-full p-2 border"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white">Post</button>
        </form>
      </div>
    </div>
  );
};

// PostsPage Component
const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [showVideos, setShowVideos] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showPostForm, setShowPostForm] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true); // To toggle between Home and Videos
  const firstPostRef = useRef(null);

  // Fetch videos from the JSON file
  useEffect(() => {
    setVideos(videoData);
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.caption.toLowerCase().includes(searchText.toLowerCase())
  );

  // Function to add a new post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Adds the new post to the front of the post list
  };

  // Function to scroll to the first post
  const scrollToFirstPost = () => {
    if (firstPostRef.current) {
      firstPostRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to navigate to the homepage (posts view)
  const navigateToHome = () => {
    setIsHomePage(true); // Set the view to posts
    setShowVideos(false); // Hide videos when switching to home page
  };

  // Function to toggle video view
  const toggleVideos = () => {
    setIsHomePage(false); // Set the view to videos
    setShowVideos(true);
  };

  return (
    <div className="space-y-4 pt-20 pb-16">
      {showPostForm && <PostForm setShowPostForm={setShowPostForm} addPost={addPost} />}
      
      <div ref={firstPostRef}>
        {/* Display posts */}
        {isHomePage && filteredPosts.map((post, index) => (
          <div key={index} className="flex justify-center py-4 px-4">
            <div className="w-full max-w-lg bg-black text-white rounded-lg shadow-sm p-4">
              {post.image && <img src={post.image} alt="Post" className="w-full h-36 object-cover mb-4" />}
              {post.video && <video src={post.video} controls className="w-full h-36 object-cover mb-4" />}
              <p>{post.caption}</p>
            </div>
          </div>
        ))}

        {/* Display videos if in video view */}
        {!isHomePage && showVideos && (
          <div className="fixed top-0 left-0 w-full h-full bg-black z-10 flex flex-col justify-center items-center">
            <button
              onClick={() => setShowVideos(false)}
              className="absolute top-4 right-4 text-white text-3xl z-20"
            >
              X
            </button>
            <div className="space-y-6 w-full max-w-3xl p-4 overflow-y-scroll">
              {videos.map((video, index) => (
                <div key={index} className="bg-black p-4 rounded-lg shadow-sm mb-6">
                  <div className="relative pb-[56.25%]">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-white">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer
        setSearchText={setSearchText}
        setShowPostForm={setShowPostForm}
        setShowVideos={toggleVideos}
        scrollToFirstPost={scrollToFirstPost}
        navigateToHome={navigateToHome}
      />
    </div>
  );
};

export default PostsPage;
