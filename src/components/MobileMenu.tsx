import { Clock, X, Phone } from "lucide-react";
import RollingCtaButton from './RollingCtaButton'
import useIndiaTime from '../hooks/useIndiaTime'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
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

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const indiaTime = useIndiaTime()

  return (
    <div
      className={`fixed inset-0 z-50 sm:hidden ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute inset-x-0 bottom-0 mx-3 mb-3 rounded-2xl bg-[#1a1a1a] p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 px-3 py-1.5 text-[13px] text-gray-100">
            <Clock size={14} />
            {indiaTime} in India
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg transition-colors h-10 px-4 font-medium inline-flex whitespace-nowrap gap-5 items-center justify-between cursor-pointer bg-[#1e1e1e] text-white hover:bg-[#931EE2] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(256,256,256,0.09),0_-1px_0_0_rgba(255,255,255,0.15)] sm:w-auto"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={onClose}
              className="text-[28px] font-medium text-gray-200 sm:text-[32px]"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          <RollingCtaButton
            label="Book a 30 Min Call"
            buttonClassName="rounded-[10px] transition-colors ps-6 pe-1 py-1 font-medium sm:flex hidden whitespace-nowrap gap-5 items-center justify-between cursor-pointer bg-[#931EE2] text-white hover:bg-[#931EE2] w-full sm:w-auto"
            arrowWrapClassName="bg-[#7A06C8] h-11 w-11 rounded-[6px]"
            arrowIconClassName="text-white"
            icon={Phone}
            arrowIconSize={20}
          />
        </div>
      </div>
    </div>
  );
}
