import Link from "next/link";
import Navbar from "../ui/aboutme/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex grow h-screen flex-col md:flex-row md:overflow-hidden">
        <Navbar/>
        <main className="flex grow md:overflow-y-auto">{children}</main>
      </div>
    );
  }
