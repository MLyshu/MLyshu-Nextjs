'use client';

import { motion } from "framer-motion";
import Asso from "./asso";
import Formation from "./formation";
import Experience from "./experience";

const container = {
    hidden: { 
        opacity: 0,
        x:-100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration:0.5,
            staggerChildren: 0.5,
        },
    },
};

const MainContent = () => {
    return (
        <motion.div className="flex flex-col mainContent">
            <div className="flex grow flex-col items-center grow">
                <h1 className="bg-gray-900 px-20 py-8 w-fit text-6xl font-bold text-white text-center">Mon CV numérique</h1>
                <div className="flex grow justify-between mb-2 bg-yellow-500 text-gray-950 font-bold py-2 px-4 items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                    </svg>
                    <p className="mx-5 text-xl">Next.JS</p>
                    <p>-</p>
                    <p className="mx-5 text-xl">Vercel</p>
                    <p>-</p>
                    <p className="mx-5 text-xl">Framer Motion</p>
                    <p>-</p>
                    <p className="mx-5 text-xl">Tailwindcss</p>
                    <p>-</p>
                    <p className="mx-5 text-xl">Heroicons</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col grow text-center border-white br-2 mt-20">
                <h2 className="text-3xl font-bold">Mon implication dans des associations</h2>
                <div className="flex mt-10 flex-col 2xl:flex-row 2xl:justify-evenly">
                    <Asso id={'ronron'} 
                        name={'Ronron Association'} 
                        desc={'Association spécialisée dans la protection animale'} 
                        title={'Gestion site internet'} 
                        content={'Refonte du site internet Wordpress (en cours) et maintenance du contenu du site.'}
                        date={'07/2024-Maintenant'}>
                    </Asso>
                    <Asso id={'lbw'} 
                        name={'LeBlueWall'} 
                        desc={'Association de supporters de la Karmine Corp'} 
                        title={'Pôle événementiel / Pôle média'} 
                        content={"Organisation d'évènements lors de déplacements de l'association ou d'évènements en ligne pour la communauté. Régisseur de la chaîne Twitch."}
                        date={'10/2023-Maintenant'}>
                    </Asso>
                    <Asso id={'binh'} 
                        name={"Bin'Harry"} 
                        desc={"Association d'étudiant"} 
                        title={"Président de l'association"} 
                        content={"Organisation d'évènements pour les étudiants ainsi que la gestion de l'administration pour l'association."}
                        date={'03/2021-03/2022'}>
                    </Asso>
                </div>
            </div>
            <div className="flex grow mt-20 sm:flex-col lg:flex-row">
                <div className="flex flex-col grow text-center border-white br-2">
                    <h2 className="text-3xl font-bold">Mes formations</h2>
                    <div className="flex flex-col mt-10 items-center">
                        <Formation name={"Licence professionnelle WIMSI"} 
                            desc={"Suite à mon DUT et la proposition d'alternance de mon entreprise, j'ai décidé de continuer les études une année de plus et de choisir la licence professionnelle poursuivant mon DUT."} 
                            date={"2022-2023"} 
                            location={"Reims - IUT"} 
                            current={"Validée"} 
                            isLast={false}>
                        </Formation>
                        <Formation name={"DUT Informatique"} 
                            desc={"Formation en 2 ans avec un stage lors du 4ème semestre."} 
                            date={"2020-2022"} 
                            location={"Reims - IUT"} 
                            current={"Validé"} 
                            isLast={false}>
                        </Formation>
                        <Formation name={"Baccalauréat S-SVT (Spécialitée Maths)"} 
                            desc={""} 
                            date={"2020"} 
                            location={"Reims - Lycée Roosevelt"} 
                            current={"Validé"} 
                            isLast={true}>
                        </Formation>
                    </div>
                </div>
                <div className="flex flex-col grow text-center border-white br-2">
                    <h2 className="text-3xl font-bold sm:mt-10 lg:mt-0">Mes expériences</h2>
                    <div className="flex flex-col mt-10 items-center">
                        <Experience name={"Intérimaire - Agent courrier"} 
                            desc={"Tri des courriers/colis"} 
                            date={"01/2024-02/2024"} 
                            location={"Reims - PPDC"} 
                            current={"Terminé"} 
                            isLast={false}>
                        </Experience>
                        <Experience name={"Alternance développeur web"} 
                            desc={"Création de site internet sous Wordpress. Développement d‘un site interne à l‘entreprise sous CodeIgniter. Réunions/appels avec les clients ainsi que la maintenance de leurs sites."} 
                            date={"07/2022-08/2023"} 
                            location={"Reims - ELHEM"} 
                            current={"Terminé"} 
                            isLast={false}>
                        </Experience>
                        <Experience name={"Stage développeur web"} 
                            desc={"Création de site internet sous Wordpress. maintenance des sites des clients."} 
                            date={"03/2022-05/2022"}
                            location={"Reims - ELHEM"} 
                            current={"Terminé"} 
                            isLast={false}>
                        </Experience>
                        <Experience name={"CDD Agent Courrier"} 
                            desc={"Tri des courriers/colis."} 
                            date={"07/2021-08/2021"}
                            location={"Reims - PPDC"} 
                            current={"Terminé"} 
                            isLast={true}>
                        </Experience>
                    </div>
                </div>
            </div>
            <footer className="mt-12 p-5 text-center bg-gray-800">
                <h1 className="text-2xl">Vous souhaitez en savoir plus sur moi ? Rendez-vous sur mon site principal <a className="text-yellow-500 font-bold" href="https://mlyshu.fr">MLyshu.fr</a> (Symfony) !</h1>
            </footer>
        </motion.div>
    );
};

export default MainContent;
