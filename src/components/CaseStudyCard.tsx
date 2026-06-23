import { ArrowRight } from 'lucide-react'
import LinkArcIcon from '../icons/LinkArcIcon'

interface CaseStudyCardProps {
  videoSrc: string
  aspectClassName: string
  containerBgClassName: string
  description: string
  title: string
  variant: 'light' | 'dark'
  expandedWidthClassName: string
  buttonLabel: string
}

export default function CaseStudyCard({
  videoSrc,
  aspectClassName,
  containerBgClassName,
  description,
  title,
  variant,
  expandedWidthClassName,
  buttonLabel,
}: CaseStudyCardProps) {
  const isLight = variant === 'light'

  return (
    <div>
      <div
        className={`group relative cursor-pointer overflow-hidden rounded-2xl ${aspectClassName} ${containerBgClassName}`}
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        <div
          className={`absolute bottom-4 left-4 flex h-9 w-9 items-center overflow-hidden rounded-full transition-all duration-300 ease-in-out ${expandedWidthClassName} ${
            isLight ? 'bg-white' : 'bg-gray-900'
          }`}
        >
          <span
            className={`whitespace-nowrap pl-4 pr-8 text-[13px] font-medium opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100 ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            {buttonLabel}
          </span>
          <span
            className={`absolute right-2.5 top-1/2 flex h-4 w-4 -translate-y-1/2 -rotate-45 items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-0 ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isLight ? <LinkArcIcon className="h-3.5 w-3.5" /> : <ArrowRight size={14} />}
          </span>
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
        {description}
      </p>
      <p className="mt-1 text-[14px] font-semibold text-gray-900 sm:text-[15px]">{title}</p>
    </div>
  )
}
