import SmartImage from '../ui/SmartImage.jsx'

export default function About() {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface-parchment" id="about">
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

    <div className="lg:col-span-6 relative">
    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-card">
    <SmartImage className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700" data-alt="Diverse group of cheerful secondary school students at Tula's International School wearing navy blue school blazers and ties in an advanced robotics and engineering workshop. Students assemble and code an autonomous rover together around a wooden workbench under warm afternoon sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfBBm0uaKD0Lp_1wDSJeseS7YSeOHlRW8Qy1MFQR0_nkkQF6sPQz8jQmwGm3d6gs22UYh8HqCaB6sKP9agYXn3PzT4zIBFgHklBl1m-GiyNYjES19xRDEKoucLtq_YqOe9NIGImgeVR2XcjNtxYi3VmHGPfPGwn9NZ5D-1kyy9bbLu_R_ZNz8sGu9L2dVGTYW9PHCTEin_sfRMWlMOXPg24SrJfaOaOenQ4I6_awu9gmgg0b4eWGpOKQ"/>
    <div className="absolute bottom-0 inset-x-0 p-space-lg bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-transparent text-white">
    <span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest">Innovation In Pedagogy</span>
    <p className="font-headline-sm text-headline-sm font-semibold text-white mt-1">Autonomous AI &amp; STEM Labs</p>
    <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">Encouraging curiosity from Class IV onwards with hands-on robotic design.</p>
    </div>
    </div>

    <div className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 p-4 rounded-xl bg-surface-card shadow-2xl">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
    <span className="material-symbols-outlined text-[28px]">assured_workload</span>
    </div>
    <div>
    <p className="font-label-lg text-label-lg font-bold text-primary">Est. 2012 • Dehradun</p>
    <p className="font-label-caps text-label-caps text-text-muted">Rishabh Educational Trust</p>
    </div>
    </div>
    </div>

    <div className="lg:col-span-6 flex flex-col gap-space-md">
    <div className="flex items-center gap-2">
    <span className="h-0.5 w-8 bg-secondary-container"></span>
    <span className="font-label-caps text-label-caps text-secondary uppercase font-bold tracking-widest">Modern Gurukul Philosophy</span>
    </div>
    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                “We feel supported in what we do and nudged further to do more.”
              </h2>
    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                At Tula’s, we believe in bringing out the best in every student—whether it’s academics, music, art, or athletics. With dedicated faculty mentorship, learning is designed as an unforgettable adventure where curiosity thrives and global citizenship begins.
              </p>
    <p className="font-body-md text-body-md text-text-muted leading-relaxed">
                Nestled in Uttarakhand’s scenic Doon Valley, our campus insulates students from urban distractions while equipping them with 21st-century digital classrooms, competitive career coaching (JEE/NEET/SAT/CLAT), and cultural grounding.
              </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-card shadow-sm">
    <span className="material-symbols-outlined text-primary-container text-[22px] shrink-0">check_circle</span>
    <div className="flex flex-col">
    <span className="font-label-lg text-label-lg font-bold text-primary">Seamless CBSE IV–XII</span>
    <span className="font-body-sm text-body-sm text-text-muted">Individualized study pathways</span>
    </div>
    </div>
    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-card shadow-sm">
    <span className="material-symbols-outlined text-primary-container text-[22px] shrink-0">check_circle</span>
    <div className="flex flex-col">
    <span className="font-label-lg text-label-lg font-bold text-primary">Pastoral Boarding</span>
    <span className="font-body-sm text-body-sm text-text-muted">Safe, wholesome nutrition</span>
    </div>
    </div>
    </div>
    <div className="pt-space-sm">
    <a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold hover:text-emerald-vivid transition-colors" href="#pillars-section">
    <span>Discover Our Core Pillars &amp; Heritage</span>
    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
    </a>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}
