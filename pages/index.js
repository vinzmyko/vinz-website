import Link from "next/link";
import Head from "next/head";
import { BsMoonStarsFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitter, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import endlessrunner_gif from "../public/ps5_compressed.gif";
import pokesurvivors from "../public/pokesurvivors.gif";
import cerebellum from "../public/cerebellum.gif";

export default function Home() {
  // date format = YYYY-MM-DD
  const gamesData = [
    {
      title: "Cerebellum",
      date: "2019-09-01",
      tag: ["Unity", "C#"],
      imageSrc: cerebellum,
      pageLink: "/Cerebellum",
    },
    {
      title: "PokeSurvivors",
      date: "2024-05-20",
      tag: ["Godot"],
      imageSrc: pokesurvivors,
      pageLink: "/PokeSurvivors",
    },
     {
      title: "Endless Runner",
      date: "2022-05-01",
      tag: ["C++"],
      imageSrc: endlessrunner_gif,
      pageLink: "/EndlessRunner",
    },
    
  ];

  const tagList = ["C#", "C++", "Godot", "Unity"];

  const [darkMode, setDarkMode] = useState(true);

  const [isSortOpen, setIsSortOpen] = useState(false);
  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const toggleTagsDropdown = () => {
    setIsTagsOpen(!isTagsOpen);
  };

  const [sortOrder, setSortOrder] = useState("latest"); // Add state variable for sorting order

  const [filterList, setFilterList] = useState([]);

  const handleTagClick = (tag) => {
    if (!filterList.includes(tag)) {
      setFilterList([...filterList, tag]);
    }
    setIsTagsOpen(false);
  };

  const handleFilterRemove = (tag) => {
    const updatedFilterList = filterList.filter((item) => item !== tag);
    setFilterList(updatedFilterList);
  };

  const filteredGames = gamesData.filter((game) => {
    // Check if game's tag array contains all the selected genres in filterList
    return filterList.every((tag) => game.tag.includes(tag));
  });

  const handleSortChange = (sortType) => {
    setSortOrder(sortType === "latest" ? "latest" : "oldest");
    setIsSortOpen(false); // Close the sort dropdown after selection
  };

  const [isVisible, setIsVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const scrollToSection = () => {
    const section = document.getElementById("Portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsClicked(true);
  };
  const handleScroll = () => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollY > windowHeight && !isClicked);

    // Check if scrolled beyond a certain threshold (e.g. 50 pixels)
    if (scrollY > 50) {
      setIsClicked(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Check if URL hash is present and update isVisible state accordingly
    if (router.asPath.includes("#Portfolio")) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>

      <Head>
        <title>Vinz`s Website</title>
        
      </Head>

      <main className="bg-slate-100 px-10 md:px-20 lg:px-40 dark:bg-slate-800">

        <section className="min-h-screen">

          {/* --- Navbar --- */}

          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons text-slate-500 dark:text-slate-400">vinz del rosario</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillBrightnessHighFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-3xl dark:text-slate-400"
                  />
                ) : (
                  <BsMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-slate-500"
                  />
                )}
              </li>
              <li><a className="font-chivomono bg-slate-500 text-white px-4 py-2 rounded-md ml-8 dark:bg-slate-400 dark:text-slate-800 font-semibold" href="https://docs.google.com/document/d/e/2PACX-1vQ7oJrhKtmdHoFFcU10EKpiGgVxIU2zUdFNzN4Nl_Ylv7ay1hzmE1FDSdr1rkzjG6ZF-ojumXpsGQNY/pub" target="_blank" >CV</a></li>
            </ul>
          </nav>

          {/* --- About Me --- */}

          <div className="text-center pt-20">
            <h2 className="font-chivomono text-9xl py-5 font-semibold text-zinc-600 md:text-6xl dark:text-stone-200 sm:text-3xl">Vinz Myko Del Rosario</h2>
            <h3 className="font-chivomono text-2xl py-5 md:text-3xl text-zinc-700 dark:text-stone-300">Producer and Developer.</h3>
            <p className="font-notosans text-base py-5 leading-8 text-grey-800  max-w-lg mx-auto text-zinc-700 dark:text-stone-200">
              In my free time I like to develop software, mostly game related. Really into Game AI.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-slate-500 dark:text-slate-400">
            <a href="https://github.com/vinzmyko" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/vinz-del-rosario-aa059a144/" target="_blank">
            <AiFillLinkedin />
            </a>
          </div>

          {/* --- Circle Image --- 
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="img" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
          </div>
          */}

          {!isClicked && isVisible && (
            <button
              className="fixed bottom-4 right-4 z-10 font-notosans bg-blue-500 text-white rounded-full p-4 shadow-lg transition-opacity duration-500 ease-in-out transform hover:opacity-100 hover:scale-110"
              onClick={scrollToSection}
            >
              Scroll Down
            </button>
          )}

        </section>

        {/* --- Portfolio --- */}

        <section className="font-notosans" id="Portfolio">
          <div>
            <h3 className="text-center font-chivomono text-5xl py-8 font-semibold text-zinc-700 dark:text-stone-300">Portfolio</h3>
          </div>

          {/* --- Sorting Dropdown --- */}

          <div className="flex space-x-4">
            <div className="relative">
              <button
                onClick={toggleSortDropdown}
                className="bg-slate-400 text-slate-100 font-semibold py-2 px-4 rounded inline-flex items-center dark:bg-slate-400 dark:text-slate-800"
              >
                Sort
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.414 8L10 11.586 13.586 8H6.414zm0 4L10 15.586 13.586 12H6.414z"
                  />
                </svg>
              </button>
              {isSortOpen && (
                <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg">
                  <ul className="py-1">
                    <li
                      onClick={() => handleSortChange("latest")} // Update sorting order on click
                      className="px-4 py-2 text-zinc-700 hover:bg-gray-100"
                    >
                      Latest
                    </li>
                    <li
                      onClick={() => handleSortChange("oldest")} // Update sorting order on click
                      className="px-4 py-2 text-zinc-700 hover:bg-gray-100"
                    >
                      Oldest
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              {/* Tag Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleTagsDropdown}
                  className="bg-slate-400 text-slate-100 font-semibold py-2 px-4 rounded inline-flex items-center dark:bg-slate-400 dark:text-slate-800"
                >
                  Tags
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.414 8L10 11.586 13.586 8H6.414zm0 4L10 15.586 13.586 12H6.414z"
                    />
                  </svg>
                </button>
                {isTagsOpen && (
                  <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg">
                    <ul className="py-1">
                      {tagList.map((tag, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 text-zinc-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleTagClick(tag)}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Filtered Genres */}
            {filterList.map((tag, index) => (
              <div
                key={index}
                className="bg-slate-400 text-slate-100 font-semibold py-2 px-4 rounded inline-flex items-center dark:bg-slate-500 dark:text-slate-800"
              >
                {tag}
                <button
                  className="ml-2 text-gray-600"
                  onClick={() => handleFilterRemove(tag)}
                >
                  x
                </button>
              </div>
            ))}

          </div>

          {/* --- Images --- */}

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"> {/* Take lg:flex-wrap off when you have more games */}

            {filteredGames
              .sort((a, b) =>
                sortOrder === "latest" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
              )
              .map((game, index) => (
                <div key={index} className="basis-1/3 flex-1">
                  <Link href={game.pageLink}>
                    <Image
                      className="rounded-lg object-cover"
                      width={2000}
                      height={2000}
                      responsive="true"
                      src={game.imageSrc}
                      alt={game.title}
                    />
                  </Link>
                </div>
              ))}

          </div>

        </section>
      </main>
    </div>
  )
}