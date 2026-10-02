import { useState } from 'react'
import { academicTabs } from '../../data/site.js'
import Reveal from '../ui/Reveal.jsx'
import SectionTag from '../ui/SectionTag.jsx'

export default function Academics() {
  const [activeId, setActiveId] = useState(academicTabs[0].id)
  const active = academicTabs.find((tab) => tab.id === activeId) ?? academicTabs[0]

  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface-parchment" id="academics">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <SectionTag>Academic Horizons</SectionTag>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Structured for Scholastic Mastery (IV–XII)
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-white font-label-md text-label-md hover:bg-emerald-vivid transition-colors"
            href="#enquire-section"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Download Curriculum Prospectus</span>
          </a>
        </div>
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-surface-container-high w-fit">
          {academicTabs.map((tab) => (
            <button
              key={tab.id}
              className={
                tab.id === activeId
                  ? 'px-4 py-2 rounded-lg font-label-md text-label-md text-primary bg-white shadow-sm font-semibold transition-all'
                  : 'px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all'
              }
              onClick={() => setActiveId(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <Reveal key={active.id} className="p-space-xl rounded-2xl bg-surface-card shadow-sm">
          <div className="flex flex-col lg:flex-row gap-space-xl items-center">
            <div className="flex-1 flex flex-col gap-space-md">
              <span className="font-label-caps text-label-caps text-secondary font-bold">
                {active.eyebrow}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary">{active.title}</h3>
              <p className="font-body-md text-body-md text-text-muted leading-relaxed">
                {active.copy}
              </p>
              <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                {active.bullets.map(([title, sub]) => (
                  <div key={title} className="p-3 rounded-lg bg-surface-parchment">
                    <p className="font-label-lg text-label-lg font-bold text-primary">{title}</p>
                    <p className="font-body-sm text-body-sm text-text-muted">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full h-64 lg:h-80 rounded-xl overflow-hidden bg-surface-container">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${active.image}')` }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
