import { useState } from 'react'
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/icon";

const FeedItem = ({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  username,
}) => {

let sana = timestamp?.toDate().toLocaleTimeString("tr-TR")
let nuq = '..'

if(window.screen.availWidth <= 360){
  if(sana){
    sana = sana.slice(0,5) + nuq
  }
  username = username.slice(0,5) + nuq
  if(displayName.length >= 10){
    displayName = displayName.slice(0,10) + nuq
  }
}

const [numReply, setNumReply] = useState(parseInt(Math.random() * 100))
const [numReTweet, setNumReTweet] = useState(parseInt(Math.random() * 100))
const [numLike, setNumLike] = useState(parseInt(Math.random() * 100))

  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer" >
      <img src={avatar} alt="Profile" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center justify-between text-sm">
          <div className='flex items-center'>
            <h4 className="font-bold">{displayName}</h4>
            <span className="ml-2 text-gray-dark">{username}</span>
            <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
            <span className="text-gray-dark">
              {sana}
            </span>
          </div>
          <div className="flex space-x-1 w-10 h-10 rounded-full justify-center items-center hover:bg-primary-light">
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <p className="mb-4 text-gray-900 text-md">{content}</p>
        {image && <img src={image} className="my-2 rounded-xl max-h-96 feedItem-img" alt="Rasm" />}
        <ul className="-ml-1 mt-3 flex justify-between max-w-md feedItem-list">
          <li className="flex items-center  space-x-3 text-gray-dark text-sm group" onClick={() => setNumReply(numReply + 1)}>
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light ">
              <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">{numReply}</span>
          </li>

          <li className="flex items-center  space-x-3 text-gray-dark text-sm group" onClick={() => setNumReTweet(numReTweet + 1)}>
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
              <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
            </div>
            <span className="group-hover:text-primary-base">{numReTweet}</span>
          </li>

          <li className="flex items-center  space-x-3 text-gray-dark text-sm group" onClick={() => setNumLike(numLike + 1)}>
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200 ">
              <LikeIcon className="w-5 h-5 group-hover:text-gray-dark" />
            </div>
            <span className="group-hover:text-pink-400">{numLike}</span>
          </li>

          <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light ">
              <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
