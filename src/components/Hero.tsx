import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShaderBackground from "./ShaderBackground";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import RollingCtaButton from "./RollingCtaButton";
import PartnerBadgeIcon from "../icons/PartnerBadgeIcon";

const roles = ["Evolution", "Intelligence"];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-screen flex-col overflow-hidden bg-[#050505]">
      <ShaderBackground />

      <div className="relative z-50">
        <Navbar
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((open) => !open)}
        />
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="flex-1" />

      <div className="relative z-20 mx-auto w-full max-w-[1520px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className=" text-[12px] mb-4 z-10 tracking-wide text-gray-300 sm:text-[14px] flex items-center gap-3"
          >
            <span>Technology · Transformation · Engineering</span>
          </motion.p>
          <motion.h1
            initial={{
              opacity: 0,
              y: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="sm:text-5xl text-3xl text-gray-100 font-semibold text-left"
          >
            Technology For
            <br /> Business
            {/* <br /> */}
            <span className="relative inline-flex overflow-hidden sm:h-[1em] h-[1.2em] align-bottom ml-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{
                    y: "100%",
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-white text-balance mb-4 sm:mb-8 text-sm sm:text-base mt-6"
          >
            We design, build, and scale intelligent technology systems across
            AI, automation,
            <br className="hidden sm:block" />
            digital platforms, cloud infrastructure, and expert execution
            helping businesses
            <br className="hidden sm:block" />
            move from ambition to operational impact.
          </motion.p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 mb-4 sm:mb-20">
            <RollingCtaButton
              label="Talk to an Expert"
              buttonClassName="rounded-[10px] transition-colors ps-6 pe-1 py-1 font-medium flex whitespace-nowrap gap-5 items-center justify-between cursor-pointer bg-[#931EE2] text-white hover:bg-[#931EE2] w-full sm:w-auto"
              arrowWrapClassName="bg-[#7A06C8] h-11 w-11 rounded-[6px]"
              arrowIconClassName="text-white"
              arrowIconSize={20}
            />
            <RollingCtaButton
              label="Get to Know Us"
              buttonClassName="rounded-lg transition-colors px-6 py-4 font-medium flex whitespace-nowrap gap-5 items-center justify-between cursor-pointer bg-[#111] text-white hover:bg-[#1e1e1e] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(256,256,256,0.09),0_-1px_0_0_rgba(255,255,255,0.15)] w-full sm:w-auto"
              arrowIconClassName="text-gray-900"
              showIcon={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
