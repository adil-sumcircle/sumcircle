import { ArrowRight } from 'lucide-react'

interface RollingCtaButtonProps {
  label: string
  /** Classes for the outer pill: background, text color/size, padding. */
  buttonClassName: string
  /** Classes for the trailing arrow circle: size + background. */
  arrowWrapClassName: string
  /** Classes for the arrow icon color. */
  arrowIconClassName?: string
  arrowIconSize?: number
  onClick?: () => void
}

/**
 * CTA pill with a vertical "text roll" hover animation: the label is
 * duplicated inside an overflow-hidden track that slides up 50% on hover,
 * paired with an arrow circle that rotates -45deg.
 */
export default function RollingCtaButton({
  label,
  buttonClassName,
  arrowWrapClassName,
  arrowIconClassName = 'text-gray-900',
  arrowIconSize = 14,
  onClick,
}: RollingCtaButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 rounded-[8px] ${buttonClassName}`}
    >
      <span className="flex h-[20px] flex-col overflow-hidden">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] leading-[20px]">{label}</span>
          <span className="h-[20px] leading-[20px]">{label}</span>
        </span>
      </span>
      {/* <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${arrowWrapClassName}`}
      >
        <ArrowRight size={arrowIconSize} className={arrowIconClassName} />
      </span> */}
    </button>
  )
}
