import Reveal from '../ui/Reveal.jsx'
import SmartImage from '../ui/SmartImage.jsx'

export default function Hero({ onTourOpen }) {
  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-emerald-deep text-on-primary">

    <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105" data-alt="Sweeping panoramic aerial photograph of Tula's International School campus in Dehradun nestled under snowcapped Himalayan mountain ranges. Lush green 22-acre pine estate with modern brick residential hostels, pristine cricket pavilion, red athletic track, swimming pool, and pristine blue skies with morning sunbeam glow." style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBao_hCoQETLIwAz-4QOgu_IxupO2KXLH-0h_QgXtBUmW6IAo_JRhe3dEYNDSDU_-06VittYo4LlgTbDH7dw2AZyvRDhNYUOuYeA8V5c8PPcEOz6-ZuMNap7Om32Bxc9y38qu3iUYIfW9Q0Ex9BXtd8tyPorr5AY5xPAkpNRBWWD6T7Wd2Mm3QcVNzEgKfANSQPwQ_-gEgPqfspG9QyIUD2JsszuFQdbYyNUUePRpRct0Q45-gb0u2Vhw)' }}></div>

    <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/85 to-primary/60"></div>
    <div className="absolute inset-0 bg-radial from-transparent via-emerald-deep/40 to-emerald-deep/90"></div>

    <div className="relative max-w-[1320px] mx-auto px-margin-mobile lg:px-margin pt-36 pb-20 lg:pt-44 lg:pb-28 flex flex-col justify-between min-h-[942px]">
    <Reveal className="max-w-4xl flex flex-col gap-space-lg" delay={100}>

    <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-card/10 backdrop-blur-md border border-white/20 self-start shadow-sm">
    <span className="inline-block w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
    <span className="font-label-caps text-label-caps text-secondary-fixed tracking-wider uppercase">Admissions Open 2025–26 • CBSE Affiliated Co-Ed Residential</span>
    </div>

    <h1 className="font-display text-display text-white tracking-tight leading-tight">
              Nurturing Global Leaders in the <span className="text-secondary-fixed italic font-quote-editorial">Foothills of the Himalayas.</span>
    </h1>

    <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl leading-relaxed">
              Established under the aegis of Rishabh Educational Trust, Tula’s International School harmonizes world-class CBSE academics with holistic character building, modern STEM innovation, and an Olympian athletic discipline across a 22-acre pollution-free residential sanctuary.
            </p>

    <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
    <a className="inline-flex items-center justify-center gap-space-xs px-7 py-4 rounded-lg bg-secondary-container hover:bg-secondary text-on-surface font-label-lg text-label-lg transition-all shadow-lg hover:shadow-secondary-container/30 hover:-translate-y-0.5" href="#enquire-section">
    <span>Enquire for Admission</span>
    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
    </a>
    <button type="button" onClick={onTourOpen} className="inline-flex items-center justify-center gap-space-xs px-6 py-4 rounded-lg bg-surface-card/15 hover:bg-surface-card/25 backdrop-blur-md text-white font-label-lg text-label-lg transition-all">
    <span className="material-symbols-outlined text-[22px] text-secondary-container">play_circle</span>
    <span>Explore 360° Campus Tour</span>
    </button>
    <a className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg text-surface-container-high hover:text-white font-label-md text-label-md transition-colors" href="tel:+919837983791">
    <span className="material-symbols-outlined text-[20px] text-secondary-container">headset_mic</span>
    <span>Helpline: +91-9837983791</span>
    </a>
    </div>
    </Reveal>

    <div className="pt-space-xl mt-space-lg">
    <div className="p-space-md rounded-xl bg-surface-card/10 backdrop-blur-md border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-space-md items-center">
    <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container shrink-0">
    <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
    </div>
    <div>
    <p className="font-headline-sm text-[16px] leading-tight text-white font-bold">#1 in Dehradun</p>
    <p className="font-label-caps text-[10px] text-surface-container-highest tracking-normal uppercase">Education Today 2024</p>
    </div>
    </div>
    <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container shrink-0">
    <span className="material-symbols-outlined text-[22px]">military_tech</span>
    </div>
    <div>
    <p className="font-headline-sm text-[16px] leading-tight text-white font-bold">#1 in North India</p>
    <p className="font-label-caps text-[10px] text-surface-container-highest tracking-normal uppercase">Outlook Ranking</p>
    </div>
    </div>
    <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container shrink-0">
    <span className="material-symbols-outlined text-[22px]">supervisor_account</span>
    </div>
    <div>
    <p className="font-headline-sm text-[16px] leading-tight text-white font-bold">6:1 Faculty Ratio</p>
    <p className="font-label-caps text-[10px] text-surface-container-highest tracking-normal uppercase">Bespoke Mentorship</p>
    </div>
    </div>
    <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container shrink-0">
    <span className="material-symbols-outlined text-[22px]">sports_score</span>
    </div>
    <div>
    <p className="font-headline-sm text-[16px] leading-tight text-white font-bold">16+ Sports Hub</p>
    <p className="font-label-caps text-[10px] text-surface-container-highest tracking-normal uppercase">Olympic Arena &amp; Riding</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}
