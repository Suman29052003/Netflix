import React from "react";
import logo from "../../public/images/netflix-logo.png";

const Login = () => {
  return (
    <div>
      <div
        className={`hero w-full h-[77vh] md:h-[120vh] flex justify-center items-center bg-no-repeat`}
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
            <div className="bg-black w-[440px] h-[92vh] rounded-md bg-opacity-[80%] flex flex-col items-center ">
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
                      className="bg-[#333333] text-white w-full mt-6 p-3 rounded-md outline-none"
                    />
                  </div>
                  <div className="password">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                      className="bg-[#333333] text-white w-full mt-6 p-3 rounded-md outline-none"
                    />
                  </div>
                </div>

                <div className="signinBtn w-full bg-red-700 p-3 flex items-center justify-center font-semibold text-lg text-white mt-10 rounded-md">
                  <span>Sign In</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="checkbox my-2 ">
                    <input type="checkbox" className="p-2" />
                    <span className="text-[#9f9f9f] text-md px-2">Remember Me</span>
                  </div>
                  <div className="">
                    <span className="text-[#9f9f9f] text-md px-2">Need Help ?</span>
                  </div>
                </div>


              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
