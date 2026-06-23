import { useState } from "react";
import ShaderBackground from "./ShaderBackground";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import RollingCtaButton from "./RollingCtaButton";
import PartnerBadgeIcon from "../icons/PartnerBadgeIcon";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative flex h-screen flex-col overflow-hidden bg-[#EFEFEF]">
      <ShaderBackground />

      <div className="relative z-20">
        <Navbar
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((open) => !open)}
        />
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="flex-1" />

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <p className="mb-5 text-white text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-[14px]">
          Technology · Transformation · Engineering
        </p>

        <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tighter text-bright max-w-2xl text-balance">
          Technology that helps
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          businesses Evolve.
        </h1>

        <p className="text-white text-balance mb-6 sm:mb-8 text-sm sm:text-base mt-6">
          From digital transformation and enterprise applications to AI and
          <br className="hidden sm:block" />
          cloud modernization, we help organizations build scalable technology
          <br className="hidden sm:block" />
          foundations for long-term growth. dolorum dolor?
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
          <RollingCtaButton
            label="Start a project"
            buttonClassName="rounded transition-colors h-10 px-4 font-medium flex whitespace-nowrap gap-5 items-center justify-between cursor-pointer bg-[#931EE2] text-white hover:bg-[#931EE2] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.15),0_-1px_0_0_rgba(255,255,255,0.5)] w-full sm:w-auto"
            arrowWrapClassName="h-7 w-7 bg-white sm:h-8 sm:w-8"
            arrowIconClassName="text-[#931EE2]"
            arrowIconSize={16}
          />
          <RollingCtaButton
            label="View all projects"
            buttonClassName="rounded-lg transition-colors h-10 px-4 font-medium flex whitespace-nowrap gap-5 items-center justify-between cursor-pointer bg-[#1e1e1e] text-white hover:bg-[#931EE2] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.15),0_-1px_0_0_rgba(255,255,255,0.5)] w-full sm:w-auto"
            arrowWrapClassName="h-7 w-7 bg-white"
            arrowIconClassName="text-gray-900"
            arrowIconSize={14}
          />
        </div>
      </div>
    </section>
  );
}
