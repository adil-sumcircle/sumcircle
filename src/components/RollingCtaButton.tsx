import { CornerDownRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface RollingCtaButtonProps {
  label: string;
  /** Classes for the outer pill: background, text color/size, padding. */
  buttonClassName: string;
  /** Show the trailing icon circle. Defaults to true. */
  showIcon?: boolean;
  /** Icon component to render in the circle. Defaults to CornerDownRight. */
  icon?: LucideIcon;
  /** Classes for the trailing arrow circle: size + background. Only used when showIcon is true. */
  arrowWrapClassName?: string;
  /** Classes for the arrow icon color. */
  arrowIconClassName?: string;
  arrowIconSize?: number;
  onClick?: () => void;
  delay?: number;
}

/**
 * CTA pill with a vertical "text roll" hover animation: the label is
 * duplicated inside an overflow-hidden track that slides up 50% on hover,
 * paired with an optional arrow circle that rotates -45deg.
 */
export default function RollingCtaButton({
  label,
  buttonClassName,
  showIcon = true,
  icon: Icon = CornerDownRight,
  arrowWrapClassName = "",
  arrowIconClassName = "text-gray-900",
  arrowIconSize = 14,
  onClick,
  delay = 0,
}: RollingCtaButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
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
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center gap-3 rounded-[8px] ${buttonClassName}`}
    >
      <span className="flex h-[20px] flex-col overflow-hidden">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] leading-[20px]">{label}</span>
          <span className="h-[20px] leading-[20px]">{label}</span>
        </span>
      </span>
      {showIcon && (
        <span
          className={`flex shrink-0 items-center justify-center rounded-[7px] ${arrowWrapClassName}`}
        >
          <Icon size={arrowIconSize} className={arrowIconClassName} />
        </span>
      )}
    </motion.button>
  );
}
