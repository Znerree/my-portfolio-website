"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  // function to download the resume
  const getResume = async () => {
    try {
      const res = await fetch("/documents/Resume.pdf");
      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);

      const tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.setAttribute("download", "Resume.pdf");
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col md:items-center justify-center p-24">
      {/* intro */}
      <div className=" flex flex-col md:text-center cursor-pointer">
        <p className=" text-lg font-thin">
          <span className=" text-blue-500">Hello,</span> I&apos;m
        </p>
        <a className=" text-5xl" href="/">
          Jake Errenz Batulan.
        </a>

        <div className=" text-gray-600 text-2xl">
          <TypeAnimation
            sequence={["Software Engineer", 1000, "Software Developer", 1000, "Web Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>

      {/* buttons */}
      <div className=" flex md:justify-between mt-4 space-x-5">
        <button onClick={getResume} className=" bg-blue-500 hover:bg-blue-700 transition-all p-2 w-40 text-sm text-current">
          Download Resume
        </button>
        <button className=" border-blue-500 hover:border-blue-700 border-2 w-40 p-2 text-sm text-blue-500 hover:text-blue-700 transition-all">
          Contact Me
        </button>
      </div>

      {/* related links */}
      <div className=" flex items-center space-x-3 mt-8">
        <a href="https://github.com/Znerree" target="blank">
          <AiFillGithub className=" text-3xl text-gray-600 hover:text-gray-400 transition-all cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/znerre" target="blank">
          <AiFillLinkedin className=" text-3xl text-gray-600 hover:text-gray-400 transition-all cursor-pointer" />
        </a>
      </div>
    </main>
  );
}
