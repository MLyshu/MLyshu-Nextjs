import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <nav className="w-1/6 flex flex-col bg-blue-950 p-8 text-white">
            <Link href="/" className="mb-7">
            <img src={"../logo.png"} className="bg-white rounded-full"></img>
            </Link>
            <Link href="/aboutme/profile">Profil</Link>   
            <Link href="/aboutme/skills">Compétences</Link>   
            <Link href="/aboutme/experiences">Expériences</Link>   
            <Link href="/aboutme/projects">Projets</Link>
            <div className="flex grow flex-col justify-end">
                <Link href="/aboutme/contact" className="bg-indigo-900 p-2 text-center text-xl font-bold">Contact</Link>
                <div className="flex justify-between">
                    <a href="https://www.linkedin.com/in/lucas-leleu-bb24151b9/"><img src="../Linkedin.png"></img></a>
                    <a href="https://www.instagram.com/l.lucass_/"><img src="../Instagram.png"></img></a>
                </div>
            </div>
        </nav>
        <main className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</main>
      </div>
    );
  }
