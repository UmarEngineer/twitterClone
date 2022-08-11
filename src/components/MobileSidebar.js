import { useState } from 'react';
import UserImg from '../images/UserImg.JPG'
import { ProfileIcon, ListsIcon, TopicsIcon, BookmarksIcon, MomentsIcon, NewslettersIcon, TwitterForProfessionalIcon, TwitterAdsIcon, AnalyticsIcon, SettingsIcon, HelpIcon, DisplayIcon, KeyboardIcon,  } from '../icons/MobileIcon';
import MobileSideLInks from './MobileSideLInks';

const MobileSidebar = () => {

    const [active, setActive] = useState('Home');

    const handleMenuItemClick = (name) => {
        setActive(name)
    }

    const hiddenMobile = () => {
        document.querySelector('.mobile').classList.toggle('hiddenMobile');
        document.querySelector('.background').classList.toggle('hiddenMobile');
        document.querySelector('.home-tweetBtn').style.display = 'flex';
        document.querySelector('.content').style.height = 'auto';
        document.querySelector('.content').style.overflow = 'auto';
    }

    const mobileLinks = [
        {
          name: "Profile",
          icon: ProfileIcon,
        },
        {
          name: "Lists",
          icon: ListsIcon,
        },
        {
          name: "Topics",
          icon: TopicsIcon,
        },
        {
          name: "Bookmarks",
          icon: BookmarksIcon,
        },
        {
          name: "Moments",
          icon: MomentsIcon,
        },
        {
          name: "Newsletters",
          icon: NewslettersIcon,
        },
        {
          name: "TwitterForProfessionalIcon",
          icon: TwitterForProfessionalIcon,
        },
        {
          name: "TwitterAdsIcon",
          icon: TwitterAdsIcon,
        },
        {
          name: "AnalyticsIcon",
          icon: AnalyticsIcon,
        },
        {
          name: "SettingsIcon",
          icon: SettingsIcon,
        },
        {
          name: "HelpIcon",
          icon: HelpIcon,
        },
        {
          name: "DisplayIcon",
          icon: DisplayIcon,
        },
        {
          name: "KeyboardIcon",
          icon: KeyboardIcon,
        }
      ];

  return (
    <div className='flex flex-col px-4 hiddenMobile mobile'>
        <div className='flex items-center justify-between mobile-nav'>
            <h2 className='font-bold '>Account info</h2>
            <button className='w-6  h-6 -mr-4' onClick={hiddenMobile}>
                <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>
            </button>
        </div>
        <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
                <img src={UserImg} className='w-11 h-11 rounded-full' alt="Profile img" />
                <div className="w-7 h-7 rounded-full border-solid border-1 border-black ">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true"  data-testid="iconPlus"><g><path d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
                </div>
            </div>
            <div>
                <div className="flex flex-col">
                    <span className='font-bold text-black text-md'>Umar Hojimirzayev</span>
                    <span className="text-gray-dark text-sm">@khojimirzayev</span>
                </div>
            </div>
            <div className='flex text-sm'>
                <div className="mr-5">
                    <span className='font-bold mr-2'>15</span>
                    <span className='text-gray-dark'>Following</span>
                </div>
                <div>
                    <span className='font-bold mr-2'>25</span>
                    <span className='text-gray-dark'>Followers</span>
                </div>
            </div>
            <div>
                <ul>
                    {mobileLinks.map(({ name, icon}) => (
                        <MobileSideLInks key={name} name={name} Icon={icon} active={active} onItemClick={handleMenuItemClick} />
                    ))}
                </ul>
            </div>
            <span>Log out</span>
        </div>
    
    
    </div>
  )
}

export default MobileSidebar