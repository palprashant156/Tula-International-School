import useTheme from '../../hooks/useTheme.js'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'

  return (
    <button
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-primary-container flex items-center justify-center shadow-sm transition-colors shrink-0"
      onClick={toggle}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      <span className="material-symbols-outlined text-[18px]">
        {dark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  )
}
