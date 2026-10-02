import { sportsPills } from '../../data/site.js'
import { RevealGroup } from '../ui/Reveal.jsx'
import SectionTag from '../ui/SectionTag.jsx'
import SmartImage from '../ui/SmartImage.jsx'

export default function Sports() {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface text-on-surface" id="sports">
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
    <div>
    <SectionTag>Athletics &amp; Expression</SectionTag>
    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">16+ Olympic Sports &amp; The Arts</h2>
    </div>
    <p className="font-body-md text-body-md text-text-muted max-w-md">
              At Tula’s, sport isn’t an afterthought—it’s foundational. Full-time NIS-accredited trainers mentor students every single afternoon.
            </p>
    </div>

    <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

    <div className="lg:col-span-7 rounded-2xl overflow-hidden relative group shadow-md min-h-[380px]">
    <SmartImage className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Young school student in black riding jacket, equestrian helmet and boots trotting gracefully on a pedigree warmblood horse in outdoor sand dressage ring with lush green mountain hills and stone stables in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlPgEEqp99CBZ1mqRAPLj8kN0blMee9vjEvIfIN6-NNDOZnTT9dGeNGYNruHfTtnhOzFXhA90rdgcKeDMJgkiVV2P8o7lnkL6BKX4ttpk4cgHSk304Tp-Pdla7FVpLYAzUr7HcdbMM77nMdo4T5kDq6lHkY2oD8dJS4C6KxKeA5tHNKlxrhWbZMF1EudAcQwZ9HPptSIZoVKoUb8BSPiRehkpQEfj0NXgC8k56XtrVkh_hlzF6pExmaQ"/>
    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent"></div>
    <div className="absolute bottom-0 inset-x-0 p-space-lg text-white">
    <div className="flex items-center gap-2 mb-1">
    <span className="material-symbols-outlined text-secondary-container">sports_kabaddi</span>
    <span className="font-label-caps text-label-caps text-secondary-container tracking-wider uppercase">Professional Equestrian Academy</span>
    </div>
    <h3 className="font-headline-md text-headline-md text-white font-bold">Horse Riding &amp; Show Jumping Arena</h3>
    <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1 max-w-lg">Certified instructors groom young equestrians for national dressage, derby, and show jumping tournaments on school-owned thoroughbreds.</p>
    </div>
    </div>

    <div className="lg:col-span-5 rounded-2xl overflow-hidden relative group shadow-md min-h-[380px]">
    <SmartImage className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Grand multi-tier wooden acoustic auditorium at Tula's International School with student orchestra playing cello, violin and grand piano under professional stage lighting before an appreciative audience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN4kQMeEl_FrGTxUrCue4UAq6jKeekqmuwuPCjqvOUvTfiYFkn4Q0goaGWTmKLXU_IhI9XOYh-D369lnJTdgaxS5Ty5AxYYm68HBFfr9irUgu1pYy7aW5s4fHu_mwSWvpbqF0FeS4SFdJEw7tMGqPp02W3h3Orge-NAM2OBtCR5AijNMMCF-lIDHdr-Z0TixnRf6W1NCd5CwovDzuBAXf6V4z5ZQoldUP2zm5SWKGHaOQ3McY1YU5U9w"/>
    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent"></div>
    <div className="absolute bottom-0 inset-x-0 p-space-lg text-white">
    <div className="flex items-center gap-2 mb-1">
    <span className="material-symbols-outlined text-secondary-container">theater_comedy</span>
    <span className="font-label-caps text-label-caps text-secondary-container tracking-wider uppercase">Performing Arts &amp; Music</span>
    </div>
    <h3 className="font-headline-md text-headline-md text-white font-bold">Acoustic Symphony Hall</h3>
    <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">Equipped with Steinway instruments, Indian classical kathak wings, and dynamic theatrical rigging.</p>
    </div>
    </div>
    </RevealGroup>

    <div className="p-space-lg rounded-2xl bg-surface-card shadow-sm flex flex-col gap-space-md">
    <span className="font-label-caps text-label-caps text-secondary uppercase font-bold tracking-widest">Active Sports Infrastructure On Campus</span>
    <RevealGroup className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
      {sportsPills.map((sport) => (
        <div
          key={sport.label}
          className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-parchment hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-[18px] text-primary">
            {sport.icon}
          </span>
          <span className="font-label-sm text-[13px] font-semibold text-primary">
            {sport.label}
          </span>
        </div>
      ))}
    </RevealGroup>
    </div>
    </div>
    </section>
  )
}
