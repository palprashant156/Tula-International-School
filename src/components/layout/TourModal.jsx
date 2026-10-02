export default function TourModal({ open, onClose }) {
  if (!open) return null

  return (
    <div
      aria-label="Virtual campus walkthrough"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-md p-4 modal-scrim"
      role="dialog"
    >
      <div className="bg-surface-card rounded-2xl max-w-2xl w-full p-space-lg shadow-2xl flex flex-col gap-space-md modal-card">
        <div className="flex items-center justify-between pb-space-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">streetview</span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Virtual Campus Walkthrough
            </h3>
          </div>
          <button
            className="p-1 rounded hover:bg-surface-container text-on-surface"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="w-full h-80 rounded-xl overflow-hidden relative bg-black flex items-center justify-center">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTslJDPEeKV4O-wmC7hEnnb4YdemX96spuzUFdm_GoP1Y_ZNdyFhf9f_UcWKzt-XvOxWRHP0S1Zha2MHJ5RAZYUD7RrwvonXyO-fx5Mw5uB7YtS22F2guQgXANqdWlr-P93FS_2PSPKcZWVRgpv56DHWZ4ssmIRbMJXcocE6_g9JXPVsyaLkjbRaj2JgRl-HTJrG5Ykb19U8eqGOpC1UnZyjEEUZSDPy0T-lz6-4SNT4tV31vEiyZ2bQ')",
            }}
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-4">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-inverse-surface flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px]">play_arrow</span>
            </div>
            <p className="font-label-lg text-label-lg font-bold mt-3">
              Click to Launch Full 360° Experience
            </p>
            <p className="font-body-sm text-body-sm text-surface-container-high/80">
              Experience Hostels, Horse Stables, Squash Courts &amp; Mess Hall
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-space-xs text-text-muted font-body-sm text-body-sm">
          <span>Google Certified Campus StreetView</span>
          <button className="text-primary font-bold hover:underline" onClick={onClose} type="button">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
