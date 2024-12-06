"use client";
import Header from '@/components/Header';
import '../styles/globals.css';
import React from 'react';
import Stories from '@/components/Stories';
import Post from '../components/Post';
import Footer from '@/components/Footer';




export default function Layout() {
  return (
    <html lang="en">

      <body className="font-sans bg-black overflow-x-hidden">
       <Header/>
    
       <Stories/>
       <div className="p-4">
        <Post imgSrc="/path/to/post-image.jpg" isVideo={false} />
        <Post imgSrc="/path/to/post-video.mp4" isVideo={true} />
      </div>
<div className=' xs:fixed lg:hidden'>
  
    <Footer />
</div>



      </body>
    </html>
  );
}
