import { Menu, X, Phone } from "lucide-react";
import RollingCtaButton from "./RollingCtaButton";
import useIndiaTime from "../hooks/useIndiaTime";

interface NavbarProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const navLinks = [
  "Company",
  "Services",
  "Solutions",
  "Industries",
  "Work",
  "Resources",
  "Leadership",
];

export default function Navbar({ isMenuOpen, onToggleMenu }: NavbarProps) {
  const indiaTime = useIndiaTime();

  return (
    <div className="mx-auto w-full fixed top-0 left-0 z-92 bg-black/10 backdrop-blur-xl backdrop-saturate-[180%]">
      <nav className="flex items-center justify-between border-b border-white/10 bg-black/10 px-[24px] py-[12px] backdrop-blur-xl backdrop-saturate-[180%]">
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center">
            <img
              src="/sumcircle_logo.png"
              alt="Sumcircle logo"
              className="h-full w-full object-contain filter invert brightness-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[14px] text-white transition-colors duration-300 hover:text-gray-200"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleMenu}
            className="rounded-lg transition-colors h-10 px-4 font-medium flex whitespace-nowrap gap-3 items-center justify-center cursor-pointer bg-[#1e1e1e] text-white hover:bg-[#931EE2] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(256,256,256,0.09),0_-1px_0_0_rgba(255,255,255,0.15)] w-full sm:w-auto sm:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <RollingCtaButton
            label="Book a 30 Min Call"
            buttonClassName="rounded-[10px] transition-colors ps-6 pe-1 py-1 font-medium sm:flex hidden whitespace-nowrap gap-5 items-center justify-between cursor-pointer bg-[#931EE2] text-white hover:bg-[#931EE2] w-full sm:w-auto"
            arrowWrapClassName="bg-[#7A06C8] h-11 w-11 rounded-[6px]"
            arrowIconClassName="text-white"
            icon={Phone}
            arrowIconSize={20}
          />
        </div>
      </nav>
    </div>
  );
}
