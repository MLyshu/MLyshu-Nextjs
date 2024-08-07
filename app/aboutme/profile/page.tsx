import List from "@/app/ui/aboutme/list";
import ProfileText from "@/app/ui/aboutme/profileText";
import Title from "@/app/ui/aboutme/title";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex grow flex-col">
      <Title title={"Mon profil"}/>
      <ProfileText/>
    </div>
  );
}
