import useScrollProgress from '../../hooks/useScrollProgress.js'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-surface-container z-50">
        <div
          className="h-full bg-secondary-container transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-surface-container z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-container via-secondary-container to-emerald-vivid transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  )
}
