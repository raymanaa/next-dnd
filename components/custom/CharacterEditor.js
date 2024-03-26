"use client";
import React, { useState } from "react";
import CharacterEditorForm from "@/components/custom/CharacterEditorForm";

const CharacterEditor = () => {
  const [selections, setSelections] = useState({
    race: "",
    class: "",
    artStyle: "",
    hairColor: "",
    eyeColor: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelections((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto relative z-10" id="editor">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Panel */}
        <div className="flex items-start content-start justify-start overflow-hidden bg-white rounded-lg card h-full shadow-2xl">
          <div className="w-full h-full">
            <div className="p-4 h-full flex justify-between flex-col">
              {/* Avatar Section */}
              <div className="p-4 bg-gray-100 rounded-md">
                <div>
                  {/* Avatar Image */}1
                  {/* You can replace the image URLs accordingly */}
                  <div className="relative flex items-center justify-center w-full group rounded-full overflow-hidden">
                    <div
                      className="avatar-holder group rounded-full overflow-hidden flex items-center justify-center relative"
                      style={{ width: "400px", height: "400px" }}
                    >
                      <div
                        className="w-full absolute top-0 left-0 h-full z-0 rounded-full object-cover"
                        style={{
                          backgroundImage:
                            "url('https://storage.googleapis.com/postcrafts-public-content/headshotpro/images/backgrounds/png/6.png')",
                          backgroundColor: "rgb(27, 20, 93)",
                          backgroundSize: "100%",
                        }}
                      ></div>
                      {/* Other avatar components */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Buttons Section */}
              <div className="rounded-t-md bg-gray-100 p-2 mt-6">
                <div>
                  <div className="flex items-center justify-between space-x-2">
                    {/* Download button */}
                    <button
                      aria-label="Primary Button"
                      type="button"
                      className="hover:bg-brand-800 focus:ring-brand-200 flex flex-shrink-0 content-center items-center justify-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-center text-sm font-medium leading-4 text-white shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 animation animation-pulse"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-white mr-1.5"
                      >
                        <path d="M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z"></path>
                      </svg>
                      <span>Download headshot</span>
                    </button>
                    {/* Reset button */}
                    <button
                      aria-label="White button"
                      type="button"
                      className="flex content-center items-center justify-center rounded-md border border-white/10 bg-red-500 px-4 py-2 text-center text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Character Customization Form */}
        <div className="flex flex-col items-start content-start justify-start h-full overflow-hidden bg-white rounded-lg card max-h-[600px] relative shadow-2xl">
          <CharacterEditorForm
            selections={selections}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterEditor;
