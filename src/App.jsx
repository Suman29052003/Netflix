import React from 'react'
import heroImg from "../public/images/hero.jpg";
import logo from "../public/images/netflix-logo.png";
import "./App.css"
const App = () => {
  return (
    <>
      <div className="w-full">

          {/* Hero Section  */}

        <div className={`hero w-full h-screen flex flex-col items-center `}>

          {/* NavBar  */}
          <div className="navbar w-full  flex justify-around">         
            <div className="logo p-4">        {/* Nav Logo */}
              <img src={logo} alt="" className='h-auto w-40 object-cover drop-shadow-lg' />
            </div>
            <div className="btn p-4 ">        {/* language and sign In buttons in Navbar  */}
              <button className="language bg-transparent border-2 border-gray-600 p-1 w-28 text-white rounded-md">
                  Language
              </button>
              <button className="signIn bg-red-700 p-1 ml-4 w-20 rounded-md text-white hover:bg-red-800 duration-900">
                  Sign In
              </button>
            </div>
          </div>

          {/* heading  */}
          <div className=" w-full text-center text-white h-[80vh] flex flex-col justify-center items-center ">
            <h4 className='font-bold  text-5xl py-2'>Unlimited movies, TV shows and more</h4>
            <p className="py-2 text-xl font-semibold">Watch anywhere. Cancel anytime.</p>
            <p className="py-2 text-xl font-semibold">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="email w-full flex items-center justify-center">
              <input type="email" className="w-[25%] bg-gray-800 bg-opacity-50 border-2 border-gray-600 p-4 m-2 rounded-sm" placeholder='Email Address' />
              <div className="bg-red-700 p-4 m-2 rounded-sm w-[13%] text-2xl hover:bg-red-800 duration-900 cursor-pointer"><p className='w-full flex  items-center justify-center'>Get Started <span class="material-symbols-outlined  text-2xl font-normal">chevron_right</span></p></div>
            </div>
          </div>
        </div>

      {/*Second Div*/}
      <div className="h-[80vh]  border-t-[8px] border-b-[8px] border-gray-500 flex  w-full justify-center ">

        <div className="md:w-[80%]  flex md:flex-row flex-col w-full">

          <div className="text-white md:w-1/2 flex flex-col justify-center md:items-left items-center w-full">
            <p className="text-3xl mt-4 md:mt-0 md:text-5xl font-bold py-4 md:w-full text-left">Enjoy on your TV</p>
            <p className="text-xl p-2 md:py-2 md:text-left font-semibold text-center">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>

        <div className="md:w-1/2 md:m-0 mt-5 ">

        <img alt="" src="" class="" />

        </div>


        </div>
      </div>

      </div>
    </>
  )
}

export default App
