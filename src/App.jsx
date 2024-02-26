import React, { useState, useEffect } from "react";
import heroImg from "../public/images/hero.jpg";
import logo from "../public/images/netflix-logo.png";
import "./App.css";
import tv from "../public/images/tv.png";
import mobile from "../public/images/mobile.jpg";
import strangerThings from "../public/images/strangerThings.png";
import devicePile from "../public/images/device-pile-in.png";
import children from "../public/images/children.png";
import { NavLink } from "react-router-dom";
const App = () => {
  useEffect(() => {
    const preventCopyPaste = (event) => {
      event.preventDefault();
    };

    window.addEventListener("copy", preventCopyPaste);
    window.addEventListener("paste", preventCopyPaste);

    return () => {
      window.removeEventListener("copy", preventCopyPaste);
      window.removeEventListener("paste", preventCopyPaste);
    };
  }, []);

  const queries = [
    {
      query: "What is Netflix ?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      query: "How much does Netflix cost ?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      query: "Where can I watch ?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      query: "How do I Cancel ?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      query: "What can I Watch on Netflix ?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      query: "Is Netflix good for kids ?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [expandQuery, setExpandQuery] = useState(-1);

  return (
    <>
      <div className="w-full">
        {/* Hero Section  */}
        <div
          className={`hero w-full h-[77vh] md:h-[90vh] flex flex-col items-center bg-no-repeat`}
        >
          {/* NavBar  */}
          <div className="navbar w-full  flex justify-around">
            <div className="logo p-4">
              {/* Nav Logo */}
              <img
                src={logo}
                alt=""
                className="h-auto md:w-40 w-28 object-cover drop-shadow-lg"
              />
            </div>
            <div className="btn p-4 md:block flex ">
              {/* language buttons in Navbar  */}
              <button className="language bg-[#191919] bg-opacity-[68%] border-2 border-gray-600 p-1 w-28 text-white rounded-md inline-flex items-center justify-center">
                <span class="material-symbols-outlined text-sm px-1">
                  translate
                </span>
               <select name="" id="" className="bg-transparent border-0 outline-none">
                <option selected className="text-black">English</option>
                <option value="1" className="text-black">हिंदी</option>
               </select>
                
              </button>

              {/* sign In buttons in Navbar  */}
              <NavLink to="/Login">
              <button className="signIn bg-red-700 p-1 ml-4 w-20 rounded-md text-white hover:bg-red-800 duration-900">
                Sign In
              </button></NavLink>
            </div>
          </div>

          {/* heading  */}
          <div className=" w-full text-center text-white h-[80vh] flex flex-col justify-center items-center ">
            <h4 className="font-bold  text-3xl md:text-5xl px-4 md:px-1 py-2">
              Unlimited movies, TV shows and more
            </h4>
            <p className="py-2 text-xl font-semibold text-[#b4b0b0]">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="py-2 text-xl font-semibold md:w-full w-[80%] text-center text-[#b4b0b0]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="email w-full flex md:flex-row flex-col items-center justify-center p-4">
              <input
                type="email"
                className="w-[80%] md:w-[25%] bg-gray-800 bg-opacity-50 border-2 border-gray-600 p-4 m-2 rounded-sm"
                placeholder="Email Address"
              />
              <div className="bg-red-700 h-14 m-2 rounded-sm w-[60%] md:w-[21%] text-2xl hover:bg-red-800 duration-900 cursor-pointer text-white flex  items-center justify-center ">
                <p className="w-full flex  items-center justify-center ">
                  Get Started
                  <span className="material-symbols-outlined  text-2xl font-normal">
                    chevron_right
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Second Div*/}
        <div className="h-[85vh]  border-t-[8px]  border-[#232323] border-b-0 flex  w-full justify-center ">
          <div className="md:w-[80%]  flex md:flex-row flex-col w-full">
            <div className="text-white md:w-1/2 flex flex-col justify-center md:items-left items-center w-full">
              <p className="text-3xl mt-4 md:mt-0 md:text-5xl font-bold py-4 md:w-full text-left">
                Enjoy on your TV
              </p>
              <p className="text-xl md:p-0 p-4  font-semibold text-center md:text-left">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>

            <div className="md:w-1/2 md:m-0 mt-5 flex justify-center items-center">
              <img src={tv} className="w-[24rem] h-[22rem]" />
            </div>
          </div>
        </div>

        {/* Third Div  */}
        <div className="h-[87vh]  border-t-[8px] border-b-[0px] border-[#232323] flex  w-full justify-center ">
          <div className="md:w-[80%]  flex md:flex-row flex-col-reverse w-full">
            <div className="md:w-1/2 md:m-0 mt-5 flex flex-col justify-center items-center h-[56vh] md:h-auto">
              <img src={mobile} className="w-[24rem] h-[24rem] object-cover" />
              <div className="bg-[#000] w-[20rem] h-[6rem] relative top-[-8rem] rounded-lg border-2 border-[#565656] flex items-center">
                <img src={strangerThings} alt="" className="w-[20%] p-2" />
                <div className="text-white px-3">
                  <p className="text-md">Stranger Things</p>
                  <p className="text-sm text-blue-700">Downloding...</p>
                </div>
              </div>
            </div>

            <div className="text-white md:w-1/2 flex flex-col justify-center md:items-left items-center w-full">
              <p className="text-3xl  md:mt-0 md:text-5xl font-bold py-4 md:w-full text-center md:text-left">
                Download your shows to watch offline
              </p>
              <p className="text-xl md:p-0 px-4 md:text-left font-semibold text-center">
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Div  */}
        <div className="h-[80vh]  border-t-[8px] border-b-[8px] border-[#232323]  flex  w-full justify-center ">
          <div className="md:w-[80%]  flex md:flex-row flex-col w-full">
            <div className="text-white md:w-1/2 flex flex-col justify-center md:items-left items-center w-full py-4">
              <p className="text-3xl  md:mt-0 md:text-5xl font-bold py-4 md:w-full text-center md:text-left">
                Watch everywhere
              </p>
              <p className="text-xl md:p-0 px-4 md:text-left font-semibold text-center">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="md:w-1/2 md:m-0 mt-5 flex flex-col justify-center items-center h-[56vh] md:h-auto">
              <img src={devicePile} className="w-auto h-[60%] object-cover" />
            </div>
          </div>
        </div>

        {/* Fifth Div  */}
        <div className="h-[80vh]  border-t-[0px] border-b-[8px] border-[#232323]  flex  w-full justify-center ">
          <div className="md:w-[80%]  flex md:flex-row flex-col-reverse w-full">
            <div className="md:w-1/2 md:m-0 mt-5 flex flex-col justify-center items-center h-[56vh] md:h-auto">
              <img src={children} className="w-auto h-[60%] object-cover" />
            </div>
            <div className="text-white md:w-1/2 flex flex-col justify-center md:items-left items-center w-full">
              <p className="text-3xl  md:mt-0 md:text-5xl font-bold py-4 md:w-full text-center md:text-left">
                Create Profile For Kids
              </p>
              <p className="text-xl md:p-0 px-4 md:text-left font-semibold text-center">
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>

        {/* Query Section  */}
        <div className="flex flex-col w-full items-center justify-center border-2  border-[#232323]">
          <p className="md:text-5xl text-white p-6 font-bold text-center text-3xl">
            Frequently Asked Questions
          </p>

          {queries.map((query, index) => {
            return (
              <div className="flex flex-col w-full items-center">
                <div
                  className="md:w-[80%] h-[5rem] bg-[#333] mt-4 flex items-center justify-between text-white text-lg w-[85%] md:text-2xl font-medium hover:bg-[#555454] ease-in duration-100"
                  key={index}
                  onClick={() =>
                    setExpandQuery(expandQuery === index ? -1 : index)
                  }
                >
                  <span className="px-4">{query.query}</span>
                  {expandQuery === index ? (
                    <span className="material-symbols-outlined px-4">
                      close
                    </span>
                  ) : (
                    <span className="material-symbols-outlined px-4">add</span>
                  )}
                </div>
                {expandQuery === index && (
                  <div className="child bg-[#333] p-4 md:w-[80%] w-[85%]  mt-1">
                    <p className="text-white text-lg md:text-xl">
                      {query.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          <span className="text-white p-6 text-xl text-center w-full">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className="email w-full flex md:flex-row flex-col items-center justify-center p-4">
            <input
              type="email"
              className="w-[80%] md:w-[25%] bg-gray-800 bg-opacity-50 border-2 border-gray-600 p-4 m-2 rounded-sm"
              placeholder="Email Address"
            />
            <div className="bg-red-700 h-14 m-2 rounded-sm w-[60%] md:w-[21%] text-2xl hover:bg-red-800 duration-900 cursor-pointer text-white flex  items-center justify-center ">
              <p className="w-full flex  items-center justify-center ">
                Get Started
                <span className="material-symbols-outlined  text-2xl font-normal">
                  chevron_right
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section  */}
        <div className="h-[80vh]  border-t-[8px]  border-[#232323] border-b-[8px] flex flex-col  w-full items-center text-[#a5a4a2]">
          <div className="flex w-[80%] justify-start py-8">
            <h1 className="cursor-pointer">
              Questions ?{" "}
              <span className="underline">Call 000-800-919-1694</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 w-[80%] h-[10vh] md:h-[50vh] gap-5 text-sm">
            <div className=" w-full h-auto flex justify-start">
              <ul className="underline flex flex-col gap-4">
                <li className="cursor-pointer">FAQ</li>
                <li className="cursor-pointer">Investor Reltion</li>
                <li className="cursor-pointer">Privacy</li>
                <li className="cursor-pointer">Speed Test</li>
                <button className="language bg-transparent border-2 border-gray-600 p-1 w-28 text-white rounded-md md:block hidden my-5 no-underline">
                  Language
                </button>
                <span className="md:block hidden no-underline">
                  Netflix India
                </span>
              </ul>
            </div>
            <div className=" w-full h-auto flex justify-start">
              <ul className="underline flex flex-col gap-4">
                <li className="cursor-pointer">Help Center</li>
                <li className="cursor-pointer">Jobs</li>
                <li className="cursor-pointer">Cookies Reference</li>
                <li className="cursor-pointer">Legal Notice</li>
              </ul>
            </div>
            <div className=" w-full h-auto flex justify-start">
              <ul className="underline flex flex-col gap-4">
                <li className="cursor-pointer">Accounts</li>
                <li className="cursor-pointer">Ways to Watch</li>
                <li className="cursor-pointer">Corporate Information</li>
                <li className="cursor-pointer">Only on Netflix</li>
                <button className="language bg-transparent border-2 border-gray-600 p-1 w-28 text-white rounded-md md:hidden block my-5 no-underline">
                  Language
                </button>
                <span className="md:hidden block no-underline">
                  Netflix India
                </span>
              </ul>
            </div>
            <div className=" w-full h-auto flex justify-start">
              <ul className="underline flex flex-col gap-4">
                <li className="cursor-pointer">Media Center</li>
                <li className="cursor-pointer">Terms of Use</li>
                <li className="cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
