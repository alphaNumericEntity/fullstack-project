import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";



export default function Header () {
  const {user} = useContext(UserContext);

    return (<div>
        <header className="p-4 flex justify-between" >
          <Link to={'/'} className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-9 h-9 -rotate-90">
                   <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
                <span className='font-bold text-xl'> airbnd</span>
    
          </Link>
    
          <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-8 shadow-md shadow-gray-300'>
            <div>Any where</div>
            <div className="border border-l border-black-300"></div>
            <div>Any week</div>
            <div className="border border-l border-black-300"></div>
            <div>Add guests</div>
            <button className='bg-primary text-white p-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
            </button>
          </div>
    
    
          <Link to={user?'/account':'/login'} className="flex items-center  gap-2 border border-gray-300 rounded-full py-2 px-8">
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
              </svg>
            </div>
            {!!user && (
                <div>
                  {user.name}
                </div>
            )}
          </Link>
        </header>
       </div>);
}