'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
    hidden: { 
        opacity:0
    },
    visible: {
        opacity:1,
        transition: {
            duration:1.5,
        },
    },
};

const List = ({ content, url }) => {
    return (
        <li>
            <motion.div
                    className="flex justify-center"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                <Link href={url}>
                    {content}
                </Link>
            </motion.div>
        </li>
    );
};

export default List;
