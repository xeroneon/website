import { PiGithubLogo, PiLinkedinLogo, PiEnvelope } from "react-icons/pi";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <div className="flex items-center w-full h-[200px] bg-slate-950">
      <div className="container mx-auto flex flex-1 flex-col px-4">
        <h1 className={`font-[Turkey] text-white mb-4 text-4xl`}>Xeroneon</h1>
        <h4 className={`text-slate-400 text-xl mb-6`}>Software Engineer</h4>
        <div className="flex space-x-4">
          <Button className="bg-slate-50 text-black" size="icon">
            <PiGithubLogo size={25} />
          </Button>
          <Button className="bg-slate-50 text-black" size="icon">
            <PiLinkedinLogo size={25} />
          </Button>
          <Button className="bg-slate-50 text-black" size="icon">
            <PiEnvelope size={25} />
          </Button>
        </div>
      </div>
    </div>
  );
}
