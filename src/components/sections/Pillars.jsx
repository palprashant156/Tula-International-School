import { pillars } from '../../data/site.js'
import { RevealGroup } from '../ui/Reveal.jsx'
import SectionTag from '../ui/SectionTag.jsx'

export default function Pillars() {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface" id="pillars-section">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="max-w-xl flex flex-col gap-2">
            <SectionTag>Why Tula&apos;s International</SectionTag>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              The Four Foundations of Life at TIS
            </h2>
          </div>
          <p className="font-body-md text-body-md text-text-muted max-w-md">
            Providing each scholar an organic launchpad to excel in university admissions,
            national sports arenas, and civic leadership.
          </p>
        </div>
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-space-lg rounded-2xl bg-surface-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">{pillar.icon}</span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary font-bold">
                  {pillar.num}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">{pillar.title}</h3>
                <p className="font-body-md text-body-md text-text-muted">{pillar.copy}</p>
              </div>
              <div className="pt-space-md flex items-center gap-1 text-primary font-label-md text-label-md font-semibold">
                <span>{pillar.link}</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
