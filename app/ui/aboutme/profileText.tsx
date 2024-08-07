'use client';

import { motion } from 'framer-motion';
import List from './list';
import Link from 'next/link';

const container = {
    hidden: { 
        opacity:0
    },
    visible: {
        opacity: 1,
        transition: {
            duration:1.5,
        },
    },
};

const container2 = {
    hidden: { 
        opacity:0
    },
    visible: {
        opacity: 1,
        transition: {
            duration:1.5,
        },
    },
};

const span = {
    hover: {
        fontSize:'22px',
    }
}

const img = {
    hover: {
        scale:1.2,
    }
}

const ProfileText = () => {
    return (
        <motion.div
                className="flex grow mt-20"
                variants={container}
                initial="hidden"
                animate="visible">
            <motion.img className="w-1/5 object-cover border-blue-950 border-t-8 border-l-8 border-b-8 mb-12" src="../pp.jpg"></motion.img>
            <motion.div
                    className="flex grow flex-col bg-blue-950 p-7 mb-12"
                    variants={container2}
                    initial="hidden"
                    animate="visible"
                >
                <h2 className="text-4xl font-bold text-center bg-white p-5 w-fit self-center">Qui suis-je ?</h2>
                <div id="profileText" className="text-white mt-10 text-xl border-t-4 border-white pt-8">
                    <p>Salut ! Moi c'est <motion.span variants={span} whileHover="hover">Lucas, jeune diplômé d'un <strong>DUT Informatique</strong> et d'une <strong>licence professionnelle WIMSI</strong></motion.span> (le tout à Reims). J'ai 22 ans et vous êtes actuellement sur mon site internet <motion.span  variants={span} whileHover="hover">codé sous <strong>Next.JS</strong> et hébergé grâce à <strong>Vercel</strong>.</motion.span></p>
                    <p>Ce site a pour objectif d'être un <motion.span  variants={span} whileHover="hover">portefolio (ou un CV numérique c'est vous qui voyez)</motion.span> et a SURTOUT pour but de <motion.span  variants={span} whileHover="hover">mettre en oeuvre mes compétences sur Next.JS</motion.span> que je suis en train d'apprendre à l'heure actuelle.</p>
                    <p>Cette section n'a pour but que de simplement me présenter sans entrer dans les détails, ne vous attardez pas trop sur cette page mais <motion.span  variants={span} whileHover="hover">visitez plutôt les autres pages</motion.span> qui seront à coup sûr plus intéressantes et riches en contenu ! Je vais résumé quand même ici rapidement <motion.span  variants={span} whileHover="hover"><strong>ce que j'utilise pour faire fonctionner ce site internet :</strong></motion.span></p>
                    <ul className="mt-10 mb-10">
                    <List url={"https://nextjs.org/"} content={"Next.JS"}></List>
                    <List url={"https://vercel.com/"} content={"Vercel"}></List>
                    <List url={"https://github.com/"} content={"Github"}></List>
                    <List url={"https://tailwindcss.com/"} content={"Tailwindcss (en grande partie, j'ai quelques CSS personnels aussi)"}></List>
                    <List url={"https://www.framer.com/"} content={"Framer Motion (pour les animations)"}></List>
                    <List url={"https://heroicons.com/"} content={"Heroicons (pour toutes les petites icons que vous voyez)"}></List>
                    </ul>
                    <p>Petite précision pour Framer Motion, c'est bien moi qui produis toutes les animations à la main (ce ne sont pas des animations empruntées quelque part). Je préfère préciser afin d'être clair sur ce point là !</p>
                    <div className="text-center mt-32 bg-white text-blue-950 font-bold">
                    <motion.span  variants={span} whileHover="hover">Si vous souhaitez avoir plus de contenu sur moi, je vous invite à vous rendre sur mon site "hub" à l'adresse suivante : <Link href="https://mlyshu.fr/">MLYSHU.FR</Link>. Sur ce bonne visite !</motion.span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProfileText;
