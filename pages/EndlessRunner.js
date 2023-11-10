import Link from "next/link";
import Head from "next/head";
import { BsMoonStarsFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitter, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import {FaItchIo} from "react-icons/fa6";
import React, { useState } from "react";
import Image from "next/image";

import endlessrunner_gif from "../public/ps5_compressed.gif";

export default function Home() {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>

            <Head>
                <title>Endless Runner</title>

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
                            <li><a className="font-chivomono bg-slate-500 text-white px-4 py-2 rounded-md ml-8 dark:bg-slate-400 dark:text-slate-800 font-semibold" href="https://www.linkedin.com/in/vinz-myko-del-rosario-62605b1a6/overlay/1635523780021/single-media-viewer/?profileId=ACoAADAPwr4BwyXwBQ7r2rOF5t90pvfx06tf8iA" target="_blank" >CV</a></li>
                        </ul>
                    </nav>

                    {/* --- Main body --- */}

                    <div className="">
                        <h3 className="text-center pb-5 font-chivomono text-5xl font-semibold text-zinc-700 dark:text-stone-300">Endless Runner</h3>
                        <div className="font-notosans text-md mx-auto text-zinc-700 dark:text-stone-200">
									<p className="pb-5">
										Basic endless runner game developed for the Play Station 5 through the use of a dev kit. 
									</p>

                                    <p className="pb-5">For one of my university modules we have to use a dev kit to make a Switch/PS5 game and I chose the PS5. As I signed an NDA I do not have access to my project code.</p>
								<div className="flex w-full justify-center items-center my-2">
                                    <Image
                                        className="rounded-lg object-cover"
                                        width={500}
                                        height={500}
                                        responsive="true"
                                        src={endlessrunner_gif}
                                    />
                            </div>

								<p className="pb-5">For the most part trying to create a game on the PS5 with no documentation was very difficult, going in to development with not much experience with coding without a game engine was a strange and new feeling. I had to try and learn something completely new which motivated me to try and learn with the things that were given to us which were the sample projects showing off the difference between the PS4 and PS5 hardware. My tactic to navigate through this was using a mixture of PS4 documentation and it's sample projects. </p>
									<p className="pb-5">Researching some company in-house files like the .gnf file was very interesting. In essence one a .gnf file is used to load images and there was a lot of misinformation during my researching, leading me to look up a PS4 hobbiest forum page talking about the .gnf file. They recommended a program called Noetis however I wasn't able to get it working and moved on. With more research I stumbled upon image2gnf which is an executable file from the PS4 SDK, searching for this term I found PS4 SDK information and gave me the current process which now would be to convert a .png to a .dds to a .gnf. After trying different github applications, I eventually gave up and by chance looking at the PS4 documentation it has information that files get converted through code but couldn't find anything to do with that through searching the entire solution and thus gave up with trying to change the black background to a white background. Just changing a simple image to something else was quite a task and in the end I couldn't change a PlayStation file to look like something else. Downloading the PS4 SDK tool didn't reap any rewards and I stopped trying to figure out the .gnf file. </p>
						</div>
                    </div>
          


                </section>


            </main>
        </div>
    )
}
