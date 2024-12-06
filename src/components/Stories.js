import React, { useState } from 'react';

const Stories = () => {
  const [stories] = useState([
    { id: 1, name: 'Your Story', img: 'https://avatars.githubusercontent.com/u/142103116?v=4' },
    { id: 2, name: 'User 1', img: 'https://tse3.mm.bing.net/th?id=OIP.ttvR-hE1YBmq1VPwC4jWWgHaHa&pid=Api&P=0&h=220' },
    { id: 3, name: 'User 2', img: 'https://tse3.mm.bing.net/th?id=OIP.dYNnpW79j_5sATD2VqwTVgHaJl&pid=Api&P=0&h=220' },
    { id: 4, name: 'User 3', img: 'https://tse1.mm.bing.net/th?id=OIP.-eIirQmkw7x7oSxww6ZDvwHaIE&pid=Api&P=0&h=220' },
    { id: 5, name: 'User 4', img: 'https://tse2.mm.bing.net/th?id=OIP.VC6tfZQouIQr7Mpo_q-qeQHaFO&pid=Api&P=0&h=220' },
    { id: 6, name: 'User 5', img: 'https://tse2.mm.bing.net/th?id=OIP.eNMEDDdlFo6r4wl-jMXLrwHaIg&pid=Api&P=0&h=220' },
    { id: 7, name: 'User 6', img: 'https://tse2.mm.bing.net/th?id=OIP.H3Xxvz-5yotdS4Xr6SfnmwHaHa&pid=Api&P=0&h=220' },
    { id: 8, name: 'User 7', img: 'https://tse2.mm.bing.net/th?id=OIP.jtRO1wyV6uRKzNK-NIQ97AHaHa&pid=Api&P=0&h=220' },
  ]);

  return (
    <div>
      <div className="overflow-hidden w-full bg-black">
        <div className="flex justify-start lg:justify-center items-center p-4 space-x-5">
          {stories.map(story => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
                <img
                  src={story.img}
                  alt={story.name}
                  className="w-full h-full rounded-full border-2 border-black hover:cursor-pointer"
                />
              </div>
              <p className="text-xs text-center text-white mt-1">{story.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
