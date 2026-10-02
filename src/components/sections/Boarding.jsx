import SmartImage from '../ui/SmartImage.jsx'

export default function Boarding() {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface-parchment" id="boarding">
    <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
    <div className="max-w-2xl flex flex-col gap-2">
    <span className="font-label-caps text-label-caps text-secondary uppercase font-bold tracking-widest">A True Home in the Hills</span>
    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Residential Life Built on Care, Warmth &amp; Health</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

    <div className="p-space-lg rounded-2xl bg-surface-card shadow-sm flex flex-col gap-space-md">
    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
    <span className="material-symbols-outlined text-[28px]">bed</span>
    </div>
    <h3 className="font-headline-sm text-headline-sm text-primary">Spacious Boarding Houses</h3>
    <p className="font-body-md text-body-md text-text-muted">
                Climate-controlled dormitories designed for deep rest. Separate residential blocks for boys and girls with resident house masters, ensuring personalized pastoral guidance and emotional security.
              </p>
    <ul className="flex flex-col gap-2 pt-2">
    <li className="flex items-center gap-2 font-body-sm text-body-sm text-primary font-medium">
    <span className="material-symbols-outlined text-[16px] text-secondary-container">done</span>
    <span>24×7 Dedicated House Parents</span>
    </li>
    <li className="flex items-center gap-2 font-body-sm text-body-sm text-primary font-medium">
    <span className="material-symbols-outlined text-[16px] text-secondary-container">done</span>
    <span>Daily Supervised Study Hours</span>
    </li>
    </ul>
    </div>

    <div className="p-space-lg rounded-2xl bg-surface-card shadow-sm flex flex-col gap-space-md">
    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
    <span className="material-symbols-outlined text-[28px]">restaurant</span>
    </div>
    <h3 className="font-headline-sm text-headline-sm text-primary">Nutritious Dining Hall</h3>
    <p className="font-body-md text-body-md text-text-muted">
                A state-of-the-art kitchen delivering four wholesome meals a day planned by pediatric nutritionists. Indian, Continental, and Oriental cuisines prepared with the freshest Himalayan ingredients.
              </p>
    <ul className="flex flex-col gap-2 pt-2">
    <li className="flex items-center gap-2 font-body-sm text-body-sm text-primary font-medium">
    <span className="material-symbols-outlined text-[16px] text-secondary-container">done</span>
    <span>Pure RO Treated Water Infrastructure</span>
    </li>
    <li className="flex items-center gap-2 font-body-sm text-body-sm text-primary font-medium">
    <span className="material-symbols-outlined text-[16px] text-secondary-container">done</span>
    <span>Strict Hygiene &amp; Organic Produce</span>
    </li>
    </ul>
    </div>

    <div className="p-space-lg rounded-2xl bg-surface-card shadow-sm flex flex-col gap-space-md">
    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
    <span className="material-symbols-outlined text-[28px]">medical_services</span>
    </div>
    <h3 className="font-headline-sm text-headline-sm text-primary">24×7 On-Campus Infirmary</h3>
    <p className="font-body-md text-body-md text-text-muted">
                Immediate healthcare assistance staffed around the clock with qualified resident doctors and nurses. On-call tie-ups with leading multi-specialty hospitals across Dehradun for emergency response.
              </p>
    <ul className="flex flex-col gap-2 pt-2">
    <li className="flex items-center gap-2 font-body-sm text-body-sm text-primary font-medium">
    <span className="material-symbols-outlined text-[16px] text-secondary-container">done</span>
    <span>Dedicated Emergency Ambulance</span>
    </li>
    <li className="flex items-center gap-2 font-body-sm text-body-sm text-primary font-medium">
    <span className="material-symbols-outlined text-[16px] text-secondary-container">done</span>
    <span>Regular Pediatric Wellness Audits</span>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </section>
  )
}
