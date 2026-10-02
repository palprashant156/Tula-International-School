import { testimonialFeature, testimonials } from '../../data/site.js'
import Reveal, { RevealGroup } from '../ui/Reveal.jsx'
import SmartImage from '../ui/SmartImage.jsx'
import SectionTag from '../ui/SectionTag.jsx'

function Stars() {
  return (
    <div className="flex text-secondary-container">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="material-symbols-outlined text-[16px]">
          star
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface-parchment">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <SectionTag>Unfiltered Confidence</SectionTag>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Parent Voices Across India
            </h2>
          </div>
          <div className="flex items-center gap-2 p-2 px-4 rounded-full bg-amber-soft text-secondary font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">star</span>
            <span className="font-bold">4.8 / 5.0 Star Rating on Google Reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          <Reveal
            className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md relative min-h-[380px]"
          >
            <SmartImage
              alt={testimonialFeature.alt}
              className="w-full h-full object-cover"
              data-alt={testimonialFeature.alt}
              src={testimonialFeature.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-space-lg text-white">
              <span className="font-label-caps text-label-caps text-secondary-container uppercase">
                {testimonialFeature.eyebrow}
              </span>
              <p className="font-headline-sm text-headline-sm text-white font-bold mt-1">
                {testimonialFeature.quote}
              </p>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">
                {testimonialFeature.sub}
              </p>
            </div>
          </Reveal>
          <RevealGroup className="lg:col-span-7 flex flex-col gap-space-md justify-between">
            {testimonials.map((item) => (
            <figure
              key={item.name}
              className="p-space-lg rounded-2xl bg-surface-card shadow-sm flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-secondary font-bold">
                  {item.role}
                </span>
                <Stars />
              </div>
              <blockquote className="font-quote-editorial text-quote-editorial-mobile lg:text-[20px] text-primary italic leading-relaxed">
                {item.quote}
              </blockquote>
              <figcaption className="font-label-md text-label-md font-bold text-on-surface">
                {item.name}
              </figcaption>
            </figure>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
