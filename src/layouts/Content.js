import { useEffect, useState } from "react"
import { HomeIcon, MessagesIcon, NotificationsIcon, PopulerIcon, SearchIcon } from "../icons/icon"
import TweetBox from '../components/TweetBox'
import UserImg from '../images/UserImg.JPG'
import db from '../firebase'
import FeedList from "../components/FeedList"

// import { collection, orderBy, onSnapshot, getDocs, query } from "firebase/firestore"; 

const Content = () =>{
    
    const [tweets, setTweets] = useState([])
    
    const handleFocus = () => {
        document.querySelector('.home-navbar').style.display = 'none';
        document.querySelector('.home-tweetBtn').style.display = 'none';
    }

    const handleBlur = () => {
        if(window.screen.availWidth <= 500){
            document.querySelector('.home-navbar').style.display = 'flex';
            document.querySelector('.home-tweetBtn').style.display = 'flex';
        }
    }

    const mobileShow = () => {
        document.querySelector('.mobile').classList.toggle('hiddenMobile')
        document.querySelector('.background').classList.toggle('hiddenMobile')
        document.querySelector('.home-tweetBtn').style.display = 'none';
        document.querySelector('.content').style.height = '100vh';
        document.querySelector('.content').style.overflow = 'hidden';
    }

    useEffect(() => {
        db.collection("feed")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setTweets(snapshot.docs.map((doc) => doc.data()))
          );
      }, []);

    // useEffect(() => {
    //     // const q = query(collection(db, 'feed'))

    //     const querySnapshot = getDocs(collection(db, 'feed'));
    //     querySnapshot.forEach((doc) => {
    //         // setTweets(snapshot.docs.map((doc) => doc.data()))
    //         console.log(doc.id, " => ", doc.data())
    //     })

        
    // }, [])



    return(
        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight content">
            <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
                <div className="flex items-center justify-center space-x-3">
                    <img src={UserImg} alt='Profile' onClick={mobileShow} className='w-11 h-11 rounded-full home-userImg hidden' />
                    <span className="font-bold text-xl text-gray-900 home-text">Home</span>
                </div>
                <PopulerIcon className="w-6 h-6 text-primary-base" />
            </header>
            <div className='flex space-x-4 px-4 py-4'>
                <img src={UserImg} alt='Profile' className='w-11 h-11 rounded-full content-userImg' />
                <TweetBox handleFocus={handleFocus} handleBlur={handleBlur}/>
            </div>
            
            <div className="home-tweetBtn flex items-center justify-center bg-primary-dark text-white shadow-lg rounded-full w-14 h-14 transform transition-colors duration-200">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-white hidden sidebar-svg" fill='current-color'><g><path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path></g></svg>
            </div>

            <div className="home-navbar flex items-center justify-between h-13 bg-white ">
                <div className="ml-10 home-icon">
                    <HomeIcon className="w-7 h-7"/>
                </div>
                <div>
                    <SearchIcon className="w-7 h-7"/>
                </div>
                <div>
                    <NotificationsIcon className="w-7 h-7"/>
                </div>
                <div className="mr-10 mess-icon">
                    <MessagesIcon className="w-7 h-7"/>
                </div>
            </div>

            <FeedList tweets={tweets} />
        </main>
    )
}

export default Content