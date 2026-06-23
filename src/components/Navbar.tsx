import { Clock, Menu, X } from 'lucide-react'
import RollingCtaButton from './RollingCtaButton'
import useIndiaTime from '../hooks/useIndiaTime'

interface NavbarProps {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

const navLinks = ['Projects', 'Studio', 'Journal', 'Connect']

export default function Navbar({ isMenuOpen, onToggleMenu }: NavbarProps) {
  const indiaTime = useIndiaTime()

  return (
    <div className="mx-auto max-w-[1440px] p-2 sm:p-3">
      <nav className="flex items-center justify-between rounded-[12px] border border-white/10 bg-black/10 px-[12px] ps-[24px] py-[12px] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.1),0_-1px_0_0_rgba(255,255,255,0.3)] backdrop-blur-xl backdrop-saturate-[180%]">
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center">
            <img
              src="/sumcircle_logo.png"
              alt="Sumcircle logo"
              className="h-full w-full object-contain filter invert brightness-0"
            />
          </div>
          <div className="hidden">
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
        </div>

        <div className="flex items-center gap-3">
          <span className="sm:flex items-center gap-1.5 text-[13px] text-white/80 hidden">
            <Clock size={14} />
            {indiaTime} in India
          </span>
          <button
            type="button"
            onClick={onToggleMenu}
            className="rounded-lg transition-colors h-10 px-4 font-medium flex whitespace-nowrap gap-3 items-center justify-center cursor-pointer bg-[#1e1e1e] text-white hover:bg-[#931EE2] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.15),0_-1px_0_0_rgba(255,255,255,0.5)] w-full sm:w-auto"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <RollingCtaButton
            label="Book a Consultation"
            buttonClassName="rounded transition-colors h-10 px-4 font-medium sm:flex hidden whitespace-nowrap gap-3 items-center justify-center cursor-pointer bg-[#931EE2] text-white hover:bg-[#931EE2] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.15),0_-1px_0_0_rgba(255,255,255,0.5)] w-full sm:w-auto"
            arrowWrapClassName="h-6 w-6 bg-white"
            arrowIconClassName="text-gray-900"
            arrowIconSize={14}
          />
        </div>
      </nav>
    </div>
  );
}
