import Link from "next/link";
import Head from "next/head";
import { BsMoonStarsFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitter, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import React, { useState } from "react";
import Image from "next/image";

import pokesur_filestructure from "../public/automate_scenes_godot_tool.jpg"
import pokesur_gif from "../public/automate_pokemon_creation.gif"
import pokesur_api from "../public/pokeapi.png"

import { portfolio_link } from './index';

export default function Home() {

    const [darkMode, setDarkMode] = useState(true);


    return (
        <div className={darkMode ? "dark" : ""}>

            <Head>
                <title>PokeSurvivors</title>

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
                            <li><a className="font-chivomono bg-slate-500 text-white px-4 py-2 rounded-md ml-8 dark:bg-slate-400 dark:text-slate-800 font-semibold" href={portfolio_link} target="_blank" >CV</a></li>
                        </ul>
                    </nav>

                    {/* --- Main body --- */}

                    <div className="">
                        <h3 className="text-center pb-5 font-chivomono text-5xl font-semibold text-zinc-700 dark:text-stone-300">PokeSurvivors</h3>
                        <div className="font-notosans text-md mx-auto text-zinc-700 dark:text-stone-200">
                            <p className="pb-5">
                                This is one of my personal projects, in which I combine the popular Indie game Vampire Survivors with Pokemon, specifically Pokemon Mystery Dungeon`s Assets.
                            </p> 
                            <p className="pb-5">
                                This project is still work in progress but I had fun planning the code structure for this project as I had to integrate systems already placed in Pokemon such as base stats, moves, shiny percentage and evolution.
                            </p>
                            <h3 className="pb-5 font-chivomono text-3xl font-semibold text-zinc-700 dark:text-stone-300">Created Engine Tool</h3>
                            <p className="pb-5">
                                Since I used already existing game assets I had to make the assets that they designed for the Nintendo DS console file system, be more compatible with how I wanted
                                to make my current project file system work. I wanted to automate this so I just provide the original file structure and it would change it to match how I use my current game engine.
                            </p>
                            <div className="flex w-full justify-center items-center my-10">
                                    <Image
                                        className="rounded-lg object-cover"
                                        width={500}
                                        height={500}
                                        responsive="true"
                                        src={pokesur_filestructure}
                                    />
                            </div>

                            <p className="pb-5">
                                Now all I have to do is choose which Pokemon I want to convert to my file structure, copy it into my project files, select the folder I want to use in my Godot script, the name of the Pokemon 
                                (Could have automated it even more by comparing the PokeDex number and naming it based it that) and running the Godot script to generate a new file structure for my project with all the scenes I need inside of it.
                            </p>

                            <div className="flex w-full justify-center items-center my-10">
                                    <Image
                                        className="rounded-lg object-cover"
                                        width={1000}
                                        height={1000}
                                        responsive="true"
                                        src={pokesur_gif}
                                    />
                            </div>



                            <p className="pb-5">
                                In summary, I used the Godot Game Engine`s API to automatically create the file structure I wanted for my project`s
                                file structure and also creating a new scene structure.
                            </p>
 
                            <h3 className="pb-5 font-chivomono text-3xl font-semibold text-zinc-700 dark:text-stone-300">Used Pokemon API</h3>
                           <div className="flex w-full justify-center items-center my-3">
                                    <Image
                                        className="rounded-lg object-cover"
                                        width={500}
                                        height={500}
                                        responsive="true"
                                        src={pokesur_api}
                                    />
                            </div>
                            <p className="pb-5">
                                I used PokeAPI to get all the base stats of the chosen Pokemon and what moves they can learn, this resource is created when I generate the Pokemon file structure.
                            </p>
 

                        </div>
                    </div>
                </section>


            </main>
        </div>
    )
}
