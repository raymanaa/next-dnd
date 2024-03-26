"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Free character creator",
    description:
      "Embark on the free character mixer where you will choose an art style, your character class & race, and delve into the intricate details of your character's visage.",
    // type: "video",
    // path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
    // format: "video/webm",
    svg: (
      <svg
        fill="currentColor"
        className="w-6 h-6"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 289 289"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M244.373,79.021c-0.792,2.691-3.022,4.715-5.776,5.246l-41.006,7.911l-13.678,40.098c2.328,2.643,3.569,6.102,3.569,9.901 V274c0,8.284-6.349,15-14.633,15H97.523c-8.284,0-15.04-6.716-15.04-15V142.177c0-4.231,1.778-8.046,4.596-10.772l-13.16-52.387 c-0.329,0.012-0.616,0.041-0.946,0.041c-11.763,0-22.286-7.435-26.215-18.501l-0.198-0.592c-7.385-21.441,5.813-49.582,6.377-50.77 c0.866-1.819,2.43-3.216,4.336-3.871c1.905-0.658,3.995-0.523,5.797,0.379c1.175,0.588,28.86,14.635,36.231,36.034l0.217,0.615 c4.066,12.176-0.872,25.272-11.188,32.043L101.504,127h24.979V35.479L112.661,11.25c-1.34-2.32-1.257-5.18,0.083-7.5 S116.643,0,119.322,0h29.445c2.68,0,5.155,1.43,6.495,3.75s1.173,5.18-0.167,7.5l-13.614,23.291V127h28.505l13.548-40.144 L160.463,51.89c-1.532-2.327-1.647-5.312-0.3-7.75c1.349-2.438,3.947-3.91,6.722-3.871c28.255,0.592,55.061,11.677,75.48,31.215 C244.393,73.422,245.166,76.33,244.373,79.021z"></path>
        </g>
      </svg>
    ),
  },
  {
    title: "Interactive Customization",
    description:
      "Enjoy an interactive customization experience with real-time previews and adjustments.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
      </svg>
    ),
  },
  // {
  //   title: "Fully Customizable",
  //   description:
  //     "Class (rogue, fighter...), race (elf, dragonborn, changeling...), gear, and even your backdrop (elf forest, asgard, on a clif...)",
  //   svg: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="w-6 h-6"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
  //       />
  //     </svg>
  //   ),
  // },
  {
    title: "Serene Backdrops",
    description:
      "Transport your character to peaceful woodlands, majestic mountains, or enchanting castles.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
      </svg>
    ),
  },
  {
    title: "Dynamic Poses",
    description:
      "Select dynamic poses for your character, from heroic stances to mysterious gestures.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        {/* SVG Paths */}
      </svg>
    ),
  },
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ feature, isOpen, setFeatureSelected }) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
          All you need to create your DND character art
          <span className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            and get your compaign started
          </span>
        </h2>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
