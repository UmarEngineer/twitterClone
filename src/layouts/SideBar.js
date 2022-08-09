import { useState } from 'react';
import SideLinks from '../components/SideLinks';
import UserBox from '../components/UserBox';
import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, MoreIcon} from '../icons/icon'
import twitterLogo from '../images/twitter.svg'

const sideLinks = [
    {
      name: "Home",
      icon: HomeIcon,
    },
    {
      name: "Explore",
      icon: ExploreIcon,
    },
    {
      name: "Notifications",
      icon: NotificationsIcon,
    },
    {
      name: "Messages",
      icon: MessagesIcon,
    },
    {
      name: "Bookmarks",
      icon: BookmarksIcon,
    },
    {
      name: "Lists",
      icon: ListsIcon,
    },
    {
      name: "Profile",
      icon: ProfileIcon,
    },
    {
      name: "More",
      icon: MoreIcon,
    },
  ];


const SideBar = () => {
    const [active, setActive] = useState('Home');

    const handleMenuItemClick = (name) => {
      setActive(name)
    }

    return(
        <div className="sticky top-0 h-screen flex flex-col justify-between w-72 px-2 sidebar">
            <div>
                <div className='mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transform transition-colors duration-200'>
                    <img src={twitterLogo} alt="Twitter logo" className='w-11 h-11' />
                </div>
                <nav className="mb-4">
                    <ul className='sidebar-list'>
                        {sideLinks.map(({ name, icon}) => (
                            <SideLinks key={name} name={name} Icon={icon} active={active} onItemClick={handleMenuItemClick} />
                        ))}
                    </ul>
                </nav>
                <button className='sidebar-button bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200'>
                    <span className="sidebar-tweetText">Tweet</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-white hidden sidebar-svg" fill='current-color'><g><path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path></g></svg>
                </button>
            </div>
            <UserBox /> 
        </div>
    )
}

export default SideBar