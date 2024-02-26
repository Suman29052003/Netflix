import React from "react";
import logo from "../../public/images/netflix-logo.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero">
      <div
        className={` w-full h-[77vh] md:h-[120vh] flex justify-center items-center bg-no-repeat`}
      >
        {/* Logo  */}
        <div className="logo p-4 absolute top-1 left-1">
          <img
            src={logo}
            alt=""
            className="h-auto md:w-40 w-28 object-cover drop-shadow-lg"
          />
        </div>
        {/* Form Container  */}
        <div className="form">
          <form action="">
            <div className="bg-black w-[440px] min-h-[92vh] rounded-md bg-opacity-[80%] flex flex-col items-center ">
              <div className="w-[70%] mt-10">
                <div className="heading text-4xl text-white font-medium py-6">
                  <span>Sign In</span>
                </div>
                <div className="inputs w-full">
                  <div className="email">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email or Phone Number"
                      className="bg-[#333333] text-white w-full mt-6 p-3 rounded-md border border-gray-500 outline-none bg-opacity-[50%]"
                    />
                  </div>
                  <div className="password">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                      className="bg-[#333333] text-white w-full mt-6 p-3 rounded-md border border-gray-500 outline-none bg-opacity-[50%]"
                    />
                  </div>
                </div>

                <div className="signinBtn w-full bg-red-700 p-3 flex items-center justify-center font-semibold text-lg text-white mt-10 rounded-md">
                  <span>Sign In</span>
                </div>

              <div className="text-[#9f9f9f] text-xl font-medium text-center py-4">OR</div>

              <div className="signinBtn w-full bg-[#423935] bg-opacity-[80%] p-3 flex items-center justify-center font-semibold text-lg text-white  rounded-md">
                  <span>Use a Sign-in Code</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="checkbox my-4 ">
                    <input type="checkbox" className="p-2" />
                    <span className="text-[#9f9f9f] text-md px-2">
                      Remember Me
                    </span>
                  </div>
                  <div className="">
                    <span className="text-[#9f9f9f] text-md px-2 cursor-pointer hover:underline">
                      Need Help ?
                    </span>
                  </div>
                </div>

                <div className="newSignin w-full text-left mt-4">
                  <span className="text-[#9f9f9f9f]">New to Netflix ? </span>
                  <NavLink to ="/"><span className="text-white hover:underline cursor-pointer">Sign Up Now.</span></NavLink>
                </div>

                <div className="w-[100%] text-left text-[#9f9f9f9f] text-sm my-4">
                  <p>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. <span className="text-blue-800 hover:underline cursor-pointer">Learn more.</span>
                  </p>
                </div>


              </div>
            </div>
          </form>
        </div>

      </div>

      {/* footer  */}

      <div className="footer relative bottom-0 bg-black bg-opacity-[80%] w-full min-h-[35vh] flex flex-col justify-center items-center text-[#9f9f9f9f]">
        <div className="w-[80%]">
          <div className="heading ">
            <span>
            Questions? Call <span className="hover:underline">000-800-919-1694</span>
            </span>
          </div>

          <div className="grid grid-cols-4 my-4 text-sm">
            <div className="w-full">
              <ul className="underline">
                <li className="py-2">FAQ</li>
                <li className="py-2">Cookie preference</li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="underline">
                <li className="py-2">Help Center</li>
                <li className="py-2">Corporate Information</li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="underline">
                <li className="py-2">Term of Use</li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="underline">
                <li className="py-2">Privacy</li>
                </ul>
            </div>
          </div>

        <div className="btn">
        <button className="language bg-[#191919] bg-opacity-[68%] border-2 border-gray-600 p-1 w-28 text-white rounded-md inline-flex items-center justify-center">
                <span class="material-symbols-outlined text-sm px-1">
                  translate
                </span>
               <select name="" id="" className="bg-transparent border-0 outline-none">
                <option selected className="text-black">English</option>
                <option value="1" className="text-black">हिंदी</option>
               </select>
                
              </button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
