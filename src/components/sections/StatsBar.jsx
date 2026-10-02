import { stats } from '../../data/site.js'
import { RevealGroup } from '../ui/Reveal.jsx'

export default function StatsBar() {
  return (
    <section className="w-full bg-surface-card py-space-xl relative z-10 shadow-sm">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin">
        <RevealGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-lg">
          {stats.map((stat) => (
            <div
              key={stat.eyebrow}
              className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-parchment hover:bg-surface-container-low transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary font-bold tracking-widest uppercase">
                {stat.eyebrow}
              </span>
              <span className="font-stat-metric text-stat-metric text-primary">{stat.value}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{stat.sub}</span>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
