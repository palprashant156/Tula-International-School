import SmartImage from '../ui/SmartImage.jsx'
import { RevealGroup } from '../ui/Reveal.jsx'

export default function Mentors() {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface text-on-surface overflow-hidden" id="mentors">
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
    <div>
    <span className="font-label-caps text-label-caps text-secondary uppercase font-bold tracking-widest">Inspiring Greatness</span>
    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">National Icons &amp; Mentors On Campus</h2>
    </div>
    <p className="font-body-md text-body-md text-text-muted max-w-md">
              Tula’s scholars regularly interact directly with national icons, Olympic medalists, and visionary public leaders who visit Dehradun.
            </p>
    </div>
    <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">

    <div className="p-space-md rounded-2xl bg-surface-card shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold">
    <span className="material-symbols-outlined text-[26px]">sports_kabaddi</span>
    </div>
    <span className="font-label-caps text-label-caps text-secondary font-bold">OLYMPIAN • PADMA SHRI</span>
    <h3 className="font-headline-sm text-headline-sm text-primary">Sakshi Malik</h3>
    <p className="font-body-sm text-body-sm text-text-muted">
                First Indian woman wrestler to win an Olympic Medal (Rio 2016 Bronze), Rajiv Gandhi Khel Ratna awardee. Addressed TIS sports scholars on perseverance.
              </p>
    </div>

    <div className="p-space-md rounded-2xl bg-surface-card shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold">
    <span className="material-symbols-outlined text-[26px]">sports_basketball</span>
    </div>
    <span className="font-label-caps text-label-caps text-secondary font-bold">TEAM INDIA CAPTAIN</span>
    <h3 className="font-headline-sm text-headline-sm text-primary">Vishesh Bhriguvanshi</h3>
    <p className="font-body-sm text-body-sm text-text-muted">
                Indian National Basketball Team Captain and Asian Beach Games Gold medalist. Regularly presides over TIS basketball tournaments and skills clinics.
              </p>
    </div>

    <div className="p-space-md rounded-2xl bg-surface-card shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold">
    <span className="material-symbols-outlined text-[26px]">center_focus_strong</span>
    </div>
    <span className="font-label-caps text-label-caps text-secondary font-bold">NATIONAL CHAMPION</span>
    <h3 className="font-headline-sm text-headline-sm text-primary">Prakashi Tomar</h3>
    <p className="font-body-sm text-body-sm text-text-muted">
                Iconic “Shooter Dadi” with 30 National Championships (inspiration for Bollywood movie <em>Saand Ki Aankh</em>). Conducted motivation masterclasses.
              </p>
    </div>

    <div className="p-space-md rounded-2xl bg-surface-card shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold">
    <span className="material-symbols-outlined text-[26px]">military_tech</span>
    </div>
    <span className="font-label-caps text-label-caps text-secondary font-bold">ARJUNA AWARDEES</span>
    <h3 className="font-headline-sm text-headline-sm text-primary">Abhishek &amp; Aditi Swami</h3>
    <p className="font-body-sm text-body-sm text-text-muted">
                Asian Games Gold Medalist Abhishek Verma and 2024 World Archery Champion Aditi Gopichand Swami mentored our residential archery division.
              </p>

    </div>

    </RevealGroup>
    </div>
    </section>
  )
}
