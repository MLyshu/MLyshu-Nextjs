// components/Mlyshu.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const letters = "MLyshu".split('');

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.3,
        },
    },
};

const child = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const container2 = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        delay: 100,
        transition: {
            delay: 2,
            duration:1,
        }
    },
}

const button = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        delay: 120,
        transition: {
            delay: 3,
            duration: 1,
        }
    },
    grow: {
        scale: 1.1,
        rotate: 360,
        transition: {
            duration:1,
        }
    }
}

const Mlyshu = () => {
    const [buttonText, setButtonText] = useState('Découvrez-moi !');

    return (
        <div className="flex flex-col grow justify-center items-center">
            <motion.div
                className="container justify-center flex"
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ fontSize: '124px', fontWeight: 'bold', color: 'purple' }}
            >
                {letters.map((letter, index) => (
                    <motion.span key={index} variants={child}>
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div
                className="container2"
                variants={container2}
                initial="hidden"
                animate="visible"
                style={{ fontSize: '45px', color: 'purple' }}
            >
                Développeur Web Junior
            </motion.div>
            <motion.div
                className="flex mt-52 rounded-full bg-blue-900 "
                variants={button}
                initial="hidden"
                animate="visible" 
                whileHover="grow"
                onMouseEnter={() => setButtonText('Youhou !!!!')}
                onMouseLeave={() => setButtonText('Découvrez-moi !')}
            >
                <Link href="/profil" className="text-white px-10 py-3 text-2xl">
                    {buttonText}
                </Link>
            </motion.div>
        </div>
    );
};

export default Mlyshu;
