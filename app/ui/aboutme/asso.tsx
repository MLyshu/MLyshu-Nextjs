'use client';

import { motion } from "framer-motion";

type AssoProps = {
    id: string;
    name: string;
    desc: string;
    title: string;
    content: string;
    date: string;
}

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

const Asso = ({id, name, desc, title, content, date} : AssoProps) => {
    return (
        <div style={{width:'350px'}} className="mb-8">
            <div id={id} style={{height:'200px'}}>
                <div className="grow place-content-center" style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
                    <p className="text-4xl font-bold" >{name}</p>
                    <p className="text-2xl">{desc}</p>
                </div>
            </div>
            <div>
                <p className="bg-gray-900 py-2 text-xl font-bold">{title}</p>
                <div className="bg-gray-800 p-4">
                    <div className="text-justify">
                        <p>{content}</p>
                    </div>
                    <div className="flex grow justify-center pt-4">
                        <div className="flex justify-center bg-yellow-500 text-gray-950 w-fit rounded-full px-4 py-2 items-center font-bold mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                                <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                                <path fillRule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clipRule="evenodd" />
                            </svg>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Asso;
