import Link from "next/link";
import Head from "next/head";
import { BsMoonStarsFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitter, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import {FaItchIo} from "react-icons/fa6";
import React, { useState } from "react";
import Image from "next/image";


export default function Home() {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>

            <Head>
                <title>Cerebellum</title>
            </Head>

            <main className="bg-slate-100 px-10 md:px-20 lg:px-40 dark:bg-slate-800">

                <section className="min-h-screen">

                    {/* --- Navbar --- */}

                    <nav className="py-10 flex justify-between">
                        <Link href={"/#Portfolio"}>
                            <h1 className="text-xl font-burtons text-slate-500 dark:text-slate-400">vinz del rosario</h1>
                        </Link>
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

                    {/* --- Main body --- */}

            <div className="">
                <h3 className="text-center pb-5 font-chivomono text-5xl font-semibold text-zinc-700 dark:text-stone-300">Cerebullum</h3>
                <div className="font-notosans text-md mx-auto text-zinc-700 dark:text-stone-200">
                            <p className="pb-5">
                                My very first coding project I made, I just wanted to make a game based around math. A cubed number shows up at the bottom and you need to type the cubed root of the number before the skeleton attacks you.
                            </p>
                            <p className="pb-5">
                                I made all the assets myself apart from the soundtrack which is copy right free, this was my first game that I ever made and if you click on the itch.io icon it will take you to the page to play the game.
                            </p>
                </div>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-slate-500 dark:text-slate-400">
                <a href="https://vinzmyko.itch.io/cerebellum" target="_blank">
                <FaItchIo />
                </a>
          </div>


                </section>


            </main>
        </div>
    )
}
