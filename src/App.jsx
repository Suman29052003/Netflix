import React from 'react'
import heroImg from "../public/images/hero.jpg";
import logo from "../public/images/netflix-logo.png";

const App = () => {
  return (
    <>
      <div className="w-full">

          {/* Hero Section  */}

        <div className={`hero w-full h-screen flex flex-col items-center `}>
          {/* <img src={heroImg} alt="" className='w-full h-[90vh] object-cover flex flex-col'/> */}

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
              <input type="email" className="w-[25%] bg-transparent border-2 border-gray-600 p-4 m-2 rounded-sm" placeholder='Email Address' />
              <div className="bg-red-700 p-4 m-2 rounded-sm w-[13%] text-2xl hover:bg-red-800 duration-900 cursor-pointer"><p className='w-full flex  items-center justify-center'>Get Started <span class="material-symbols-outlined  text-2xl font-normal">chevron_right</span></p></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
