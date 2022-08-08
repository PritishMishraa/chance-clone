import Profile from "./Components/Profile";
import Card from "./Components/Card"

import { data } from './data'
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="w-screen sm:w-[350px] h-screen bg-[#EFF9FD]">
        <div className="w-full h-1/4 overflow-y-hidden">
          <span className="text-xl ml-5 mt-5 font-bold block">New Connections</span>
          <div className="flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth mt-5 scrollbar-hide">
            {
              data.map(({ id, img, name }) => {
                return <Profile key={id} img={img} name={name} />
              })
            }
          </div>
        </div>
        <div className="w-full h-3/4 bg-[#FEFFFE] rounded-3xl">
          <div className="flex mx-2 py-5 justify-between items-center">
            <div className="font-bold">Messages</div>
            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input onChange={e => { setSearchTerm(e.target.value) }} type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-none outline-none" placeholder="Search" required />
              </div>
            </form>
          </div>
          <div className="h-3/4 overflow-y-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide">
            {
              // eslint-disable-next-line
              data.filter(({ name }) => {
                if (searchTerm === "") {
                  return name
                } else if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return name
                }
              }).map(({ id, img, name }) => {
                return <Card key={id} img={img} name={name} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;