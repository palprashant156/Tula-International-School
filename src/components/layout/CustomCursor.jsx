import useCustomCursor from '../../hooks/useCustomCursor.js'

export default function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor()

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor cursor-dot hidden lg:block w-2 h-2 rounded-full bg-primary-container z-50"
      />
      <div
        ref={ringRef}
        className="custom-cursor cursor-ring hidden lg:block w-8 h-8 rounded-full border border-primary-container/40 z-50 transition-all duration-150"
      />
    </>
  )
}
