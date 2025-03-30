import { GiWoodPile } from "react-icons/gi";
import { IconContext } from "react-icons";
import { CiSettings, CiUser } from "react-icons/ci";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { useState } from "react";
import {
  IoAlbumsOutline,
  IoBarChartOutline,
  IoChatbubbleEllipsesOutline,
  IoHomeOutline,
  IoSearch
} from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

export default function SideBar(){
  return(
    <>
      <aside className="bg-white flex flex-col items-center gap-3 py-8 px-6 ">
        <h2 className="text-center flex justify-center items-center gap-1 text-xl"> <span><GiWoodPile /></span> DrewnoPol</h2>
        <div className="flex justify-around items-center gap-4 my-2">
          <div className='w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center'>
            <IconContext.Provider value={{size: "1.2em"}}>
              <CiUser/>
            </IconContext.Provider>
          </div>
          <IconContext.Provider value={{size: "1.5em"}}>
            <CiSettings />
          </IconContext.Provider>
          <IconContext.Provider value={{size: "1.5em"}}>
            <MdOutlineNotificationsNone />
          </IconContext.Provider>

        </div>
        <Menu/>
      </aside>
    </>
  )
}

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return(
    <div className='flex flex-col justify-items-start w-full divide-y-2 divide-gray-200'>
      <MenuElement isActive={true} text="Szukaj">
        <IoSearch />
      </MenuElement>
      <MenuElement isActive={isActive} text="Strona Główna" onClick = {() => setIsActive(!isActive) }>
        <IoHomeOutline />
      </MenuElement>
      <MenuElement isActive={isActive} text="Zamówienia" onClick = {() => setIsActive(!isActive) }>
        <IoAlbumsOutline />
      </MenuElement>
      <MenuElement isActive={isActive} text="Czaty" onClick = {() => setIsActive(!isActive) }>
        <IoChatbubbleEllipsesOutline />
      </MenuElement>
      <MenuElement isActive={isActive} text="Użytkownicy" onClick = {() => setIsActive(!isActive) }>
        <LuUsers />
      </MenuElement>
      <MenuElement isActive={isActive} text="Podsumowania" onClick = {() => setIsActive(!isActive) }>
        <IoBarChartOutline />
      </MenuElement>
    </div>
  )
}


const MenuElement = ({children, isActive, text}) => {
  const bgColor = isActive ? 'bg-stone-100' : '';
  return(
    <div className={`flex w-full gap-4 items-center justify-items-start cursor-pointer py-3 px-4 ${bgColor}`}>
      {children}
      <p>{text}</p>
    </div>
  )
}

