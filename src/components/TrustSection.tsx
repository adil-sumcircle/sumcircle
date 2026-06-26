import React, { useState } from "react";
import { motion } from "framer-motion";
import RollingCtaButton from "./RollingCtaButton";

interface Stat {
  value: string;
  label: string;
}

interface PartnerLogo {
  name: string;
}

const STATS: Stat[] = [
  { value: "120+", label: "Projects delivered" },
  { value: "7", label: "Industries served" },
  { value: "10+", label: "Years of experience" },
  { value: "96%", label: "Client retention" },
];

const FLAGS: string[] = ["🇬🇧", "🇺🇸", "🇮🇷", "🇩🇪", "🇮🇳"];

const PARTNER_LOGOS: PartnerLogo[] = [
  { name: "monday.com" },
  { name: "Microsoft" },
  { name: "monday.com" },
  { name: "Zoho" },
  { name: "haptik" },
  { name: "nasscom" },
  { name: "monday.com" },
];

const TrustSection: React.FC = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full bg-black text-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1520px] px-6 sm:px-8 lg:px-10">
        {/* Top: eyebrow + heading + supporting copy/CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-neutral-400 uppercase mb-4">
              Global Trust
            </p>
            <motion.h2
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
              className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight"
            >
              Trusted across markets. Built for businesses moving forward.
            </motion.h2>

            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {FLAGS.map((flag, idx) => (
                  <span
                    key={idx}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 ring-2 ring-black text-base"
                  >
                    {flag}
                  </span>
                ))}
              </div>
              <span className="text-sm text-neutral-400">
                Trusted by 5+ countries
              </span>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start lg:items-start justify-center gap-12 lg:pt-2">
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
              className="text-base sm:text-lg text-neutral-300 leading-relaxed"
            >
              From India to global markets, SumCircle works with businesses that
              need intelligent technology execution, structured delivery, and
              scalable digital systems.
            </motion.p>
            <RollingCtaButton
              label="View all Clients"
              buttonClassName="rounded-lg transition-colors px-6 py-4 font-medium flex whitespace-nowrap gap-5 items-center justify-between cursor-pointer bg-[#1e1e1e] text-white hover:bg-[#1e1e1e] shadow-[0_1.5px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(256,256,256,0.09),0_-1px_0_0_rgba(255,255,255,0.15)] w-full sm:w-auto"
              arrowIconClassName="text-gray-900"
              showIcon={false}
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-y-10">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`px-6 sm:px-10 ${idx % 2 !== 0 ? "border-l border-neutral-800" : ""} ${
                idx >= 2 ? "sm:border-l border-neutral-800" : ""
              }`}
            >
              <p className="text-4xl sm:text-5xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Partner logos row */}
        {/* Partner logos row */}
        <div className="mt-14 sm:mt-16 -mx-6 sm:-mx-8 lg:-mx-10 overflow-hidden relative logo-mask ">
          <motion.div
            className="flex gap-4 px-6 sm:px-8 lg:px-10 min-w-max my-1"
            animate={{
              x: paused ? undefined : "-50%",
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center  sm:h-24 h-16 w-36 sm:w-52 rounded-xl bg-neutral-900 border-neutral-800 shrink-0 shadow-[0_1.5px_2px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(256,256,256,0.09),0_-1px_0_0_rgba(255,255,255,0.15)]"
              >
                <span className="text-neutral-300 font-semibold sm:text-lg text-md whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
