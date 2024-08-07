'use client';

import { easeInOut, motion } from 'framer-motion';

const container = {
    hidden: { 
        y:-5,
    },
    visible: {
        y: 5,
        transition: {
            duration:1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
        },
    },
};

const Title = ({ title }) => {
    return (
        <motion.div
                className="flex justify-center"
                variants={container}
                initial="hidden"
                animate="visible"
            >
            <h1>
                {title}
            </h1>
        </motion.div>
    );
};

export default Title;
