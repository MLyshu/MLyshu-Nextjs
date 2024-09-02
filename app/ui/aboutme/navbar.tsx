'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Star from './star';

const container = {
    hidden: { 
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
};

const Navbar = () => {
    const [isNavbarVisible, setNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    return (
        <>
            <button 
                className="2xl:hidden fixed top-4 left-4 z-20 text-white p-2 bg-gray-800 rounded"
                onClick={toggleNavbar}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M4.5 6.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z" 
                        clipRule="evenodd" 
                    />
                </svg>
            </button>
            <motion.div
                className={`fixed 2xl:static top-0 left-0 h-full 2xl:h-auto 2xl:relative z-10 overflow-y-auto bg-gray-900 text-white ${
                    isNavbarVisible ? 'block' : 'hidden 2xl:block'
                }`}
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ width: '300px', scrollbarWidth: 'none' }}
            >
                <nav className="flex flex-col grow">
                    {/* Contenu de la navbar */}
                    <motion.div
                        className="mb-7 flex flex-col bg-gray-800 items-center py-6"
                    >
                        <Link href="/">
                            <img src={"../pp-square.png"} className="bg-gray-800 rounded-full" style={{ width: '200px' }} />
                        </Link>
                        <p className="mt-3 font-bold text-xl">Lucas LELEU</p>
                        <p className="text-base text-gray-300">Développeur web junior</p>
                    </motion.div>
                    <motion.div className="flex grow flex-col">
                        {/* Compétences */}
                        <motion.div className="px-6">
                            <h1 className="text-xl font-bold mb-3">Mes compétences</h1>
                            <div className="flex flex-col">
                                <div className="flex grow">
                                    <p>Wordpress</p>
                                    <div className="flex grow justify-end">
                                        <Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/>
                                    </div>
                                </div>
                                <div className="flex grow">
                                    <p>Symfony</p>
                                    <div className="flex grow justify-end">
                                        <Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'none'}/>
                                    </div>
                                </div>
                                <div className="flex grow">
                                    <p>HTML/CSS</p>
                                    <div className="flex grow justify-end">
                                        <Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'none'}/>
                                    </div>
                                </div>
                                <div className="flex grow">
                                    <p>Figma</p>
                                    <div className="flex grow justify-end">
                                        <Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'none'}/>
                                    </div>
                                </div>
                                <div className="flex grow">
                                    <p>SQL</p>
                                    <div className="flex grow justify-end">
                                        <Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'none'}/>
                                    </div>
                                </div>
                                <div className="flex grow">
                                    <p>Github</p>
                                    <div className="flex grow justify-end">
                                        <Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'none'}/>
                                    </div>
                                </div>
                                <div className="flex grow">
                                    <p>JavaScript</p>
                                    <div className="flex grow justify-end">
                                        <Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'none'}/>
                                    </div>
                                </div>
                                <div className="flex grow">
                                    <p>Next.JS</p>
                                    <div className="flex grow justify-end">
                                        <Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'gold'}/><Star fill={'none'}/>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="px-6">
                            <h1 className="text-xl font-bold my-3">Mes loisirs</h1>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    </svg>
                                    <p>Photographie</p>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                                        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" />
                                    </svg>
                                    <p>Esport</p>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                                        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                                    </svg>
                                    <p>Lecture</p>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                                        <path d="M19.5 6h-15v9h15V6Z" />
                                        <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z" clipRule="evenodd" />
                                    </svg>
                                    <p>Jeux de réflexion</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="px-6">
                            <h1 className="text-xl font-bold my-3">Mes langues</h1>
                            <div className="flex justify-around">
                                <p>Français</p>
                                <p>Anglais</p>
                                <p>Japonais</p>
                            </div>
                            <div className="flex justify-around mt-2">
                                <p className="bg-gray-800 rounded-full py-2 px-3 shadow-lg">C2</p>
                                <p className="bg-gray-800 rounded-full py-2 px-3 shadow-lg">B1</p>
                                <p className="bg-gray-800 rounded-full py-2 px-3 shadow-lg">A1</p>
                            </div>
                        </motion.div>
                        <motion.div className="px-6">
                            <h1 className="text-xl font-bold my-3">Mes objectifs personnels</h1>
                            <div>
                                <p>- Développer mes compétences en framework JS</p>
                                <p>- Apprendre le japonais</p>
                                <p>- Continuer de m&apos;investir et d&apos;aider des associations</p>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className="flex grow flex-col justify-end p-8">
                        <p className='bg-gray-800 p-2 text-center text-xl font-bold'>Contact</p>
                        <div className="flex mt-3 flex-col">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                                    <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                                    <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                                </svg>
                                <p>lucas.leleu51@gmail.com</p>
                            </div>
                            <a className="flex mt-3" href="https://www.linkedin.com/in/lucas-leleu-bb24151b9/"><img className="mr-2" style={{ width: '25px', height: '25px' }} src="../Linkedin.png" /><p>Lucas Leleu</p></a>
                            <a className="flex mt-3" href="https://www.instagram.com/l.lucass_/"><img className="mr-2" style={{ width: '25px', height: '25px' }} src="../Instagram.png" /><p>l.lucass_</p></a>
                        </div>
                    </div>
                </nav>
            </motion.div>
        </>
    );
};

export default Navbar;
