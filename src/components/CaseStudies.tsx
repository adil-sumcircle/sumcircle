import SectionBadge from './SectionBadge'
import CaseStudyCard from './CaseStudyCard'

const NARRATIV_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4'

const LUMINAR_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4'

export default function CaseStudies() {
  return (
    <section className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <SectionBadge
          number="2"
          label="Featured client work"
          borderClassName="border-gray-300"
        />

        <h2 className="mb-10 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-14 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16 lg:px-12">
          Our projects
        </h2>

        <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
          <CaseStudyCard
            videoSrc={NARRATIV_VIDEO}
            aspectClassName="aspect-[329/246]"
            containerBgClassName="bg-[#1a1d2e]"
            variant="light"
            expandedWidthClassName="group-hover:w-[148px]"
            buttonLabel="Learn more"
            description="Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement"
            title="Narrativ"
          />

          <CaseStudyCard
            videoSrc={LUMINAR_VIDEO}
            aspectClassName="aspect-square"
            containerBgClassName="bg-[#6b6b6b]"
            variant="dark"
            expandedWidthClassName="group-hover:w-[168px]"
            buttonLabel="View case study"
            description="Transforming a dated platform into a conversion-focused brand experience"
            title="Luminar"
          />
        </div>
      </div>
    </section>
  )
}
