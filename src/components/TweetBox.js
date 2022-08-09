import firebase from "firebase";
import { useState } from "react"
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from "../icons/icon"
import db from "../firebase";

const TweetBox = () => {

    const [content, setContent] = useState("");
    
    const sendTweet = () => {
        if (content !== "") {
          db.collection("feed").add({
            displayName: "Umar Muhandis",
            username: "@khojimirzayev",
            content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            avatar:
            'https://pbs.twimg.com/profile_images/1555566387493568515/CDk80R9Q_400x400.jpg'
          });
    
          setContent("");
        }
      };

    return(
        <div className='flex flex-col flex-1 mt-2 px-2'>
            <textarea 
                className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none"
                placeholder="What's happened?"
                spellCheck='false'
                onChange={e => setContent(e.target.value)}
                value={content}
            />

            <div className="flex items-center justify-between tweetbox-icons">
                <div className="text-primary-base flex -ml-3">
                    <div className='flex justify-center items-center rounded-full w-11 h-11 hover:bg-gray-lightest'>
                        <ImageIcon className="w-6 h-6 " />
                    </div>
                    <div className='flex justify-center items-center rounded-full w-11 h-11 hover:bg-gray-lightest'>
                        <GIFIcon className="w-6 h-6 " />
                    </div>
                    <div className='flex justify-center items-center rounded-full w-11 h-11 hover:bg-gray-lightest'>
                        <PollIcon className="w-6 h-6 " />
                    </div>
                    <div className='flex justify-center items-center rounded-full w-11 h-11 hover:bg-gray-lightest'>
                        <EmojiIcon className="w-6 h-6 " />
                    </div>
                    <div className='flex justify-center items-center rounded-full w-11 h-11 hover:bg-gray-lightest'>
                        <ScheduleIcon className="w-6 h-6 " />
                    </div>
                </div>
                <button onClick={sendTweet} className="tweetbox-button bg-primary-base text-white px-4 py-2 font-medium rounded-full">Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox