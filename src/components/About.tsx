import RollingCtaButton from './RollingCtaButton'
import SectionBadge from './SectionBadge'

const SMALL_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85'

const LARGE_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85'

function AboutCta() {
  return (
    <RollingCtaButton
      label="About our studio"
      buttonClassName="bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
      arrowWrapClassName="h-7 w-7 bg-white sm:h-8 sm:w-8"
      arrowIconClassName="text-[#F26522]"
      arrowIconSize={16}
    />
  )
}

export default function About() {
  return (
    <section className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionBadge number="1" label="Introducing Axion" borderClassName="border-gray-200" />

        <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
          Strategy-led creatives, delivering
          <br />
          results in digital and beyond.
        </h2>

        {/* Mobile / tablet layout */}
        <div className="px-5 sm:px-8 lg:hidden">
          <p className="text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
            Through research, creative thinking and iteration we help growing
            brands realize their digital full potential.
          </p>

          <div className="mt-6">
            <AboutCta />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <img
              src={SMALL_IMAGE}
              alt="Detail from an Axion Studio workspace"
              className="aspect-[438/346] w-full rounded-xl object-cover sm:w-[45%] sm:rounded-2xl"
            />
            <img
              src={LARGE_IMAGE}
              alt="The Axion Studio team collaborating"
              className="aspect-[900/600] w-full rounded-xl object-cover sm:w-[55%] sm:rounded-2xl"
            />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden grid-cols-[26%_1fr_48%] items-end gap-6 px-12 lg:grid xl:gap-8">
          <img
            src={SMALL_IMAGE}
            alt="Detail from an Axion Studio workspace"
            className="aspect-[438/346] w-full self-end rounded-2xl object-cover"
          />

          <div className="flex justify-end self-start">
            <div>
              <p className="whitespace-nowrap text-[16px] leading-[1.65] text-gray-900 xl:text-[18px]">
                Through research, creative thinking and iteration
                <br />
                we help growing brands realize their digital
                <br />
                full potential.
              </p>
              <div className="mt-6">
                <AboutCta />
              </div>
            </div>
          </div>

          <img
            src={LARGE_IMAGE}
            alt="The Axion Studio team collaborating"
            className="aspect-[3/2] w-full self-end rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
