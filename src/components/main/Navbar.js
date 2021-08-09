import React from 'react';
import { Link } from 'react-scroll';
import TimeCard from './TimeCard';



const Navbar = () => {
    return (
        <div>
            <header
                class="fixed top-0 z-50 md:w-screen w-full
                lg:px-8 px-1 lg:py-0 py-2
                flex flex-wrap justify-evenly items-center 
                bg-portfolio-1000 font-sans"
            >
                <div class="flex-1 flex justify-between items-center">
                    <a href="https://acwebdynamics.ie/">
                        <h1
                            class="lg:text-xl md:text-lg text-sm font-bold 
                            text-portfolio-4000 hover:text-portfolio-2000"
                        >
                            Aidan Caddle Web Dynamics
                        <span className="mx-1 w-3 h-3 bg-portfolio-2000 inline-block rounded-full"></span>
                        </h1>
                    </a>
                </div>
                <label for="menu-toggle" class="pointer-cursor lg:hidden block mr-6">
                    <svg class="fill-current text-portfolio-4000 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />

                <div class="hidden lg:flex lg:items-center lg:w-auto w-screen" id="menu">
                    <nav>
                        <ul class="lg:flex items-center justify-between text-base text-black pt-4 lg:pt-0
                        visited:text-black
                        visited:">
                            <li>
                                <div class="pr-1">
                                    <TimeCard />
                                </div>
                            </li>
                            <li>
                                <Link
                                    className="lg:p-4 py-3 px-0 pl-2
                                    block border-b-2 font-semibold cursor-pointer border-transparent text-portfolio-4000
                                    hover:text-portfolio-2000
                                    hover:border-portfolio-2000
                                    hover:bg-portfolio-4000"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="lg:p-4 py-3 px-0 pl-2
                                    block border-b-2 font-semibold cursor-pointer border-transparent text-portfolio-4000 hover:text-portfolio-2000
                                    hover:border-portfolio-2000
                                    hover:bg-portfolio-4000"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="lg:p-4 py-3 px-0 pl-2
                                    block border-b-2 font-semibold cursor-pointer border-transparent text-portfolio-4000 hover:text-portfolio-2000
                                    hover:border-portfolio-2000
                                    hover:bg-portfolio-4000"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="lg:p-4 py-3 px-0 pl-2
                                block border-b-2 font-semibold cursor-pointer border-transparent
                                text-portfolio-4000 hover:text-portfolio-2000
                                hover:border-portfolio-2000
                                hover:bg-portfolio-4000"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        </div >
    )
}

export default Navbar
