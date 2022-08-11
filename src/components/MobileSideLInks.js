import React from 'react'

const MobileSideLInks = ({ name, Icon, active, onItemClick}) => {
  
  const isActive = name === active
  return (
    <li className="group" onClick={() => onItemClick(name)}>
        <a href={name.toLowerCase()} 
            className='cursor-pointer block text-xl mb-2 pointer-events-none'>
            <div className='inline-block'>
                <div className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full -ml-3 pl-3 pr-8 py-3
                ${isActive ? 'text-primary-base' : ""}
                `}>
                    <Icon />
                    <span className="ml-4 font-light text-sm">
                        {name}
                    </span>
                </div>
            </div>
        </a>        
    </li>
  )
}

export default MobileSideLInks