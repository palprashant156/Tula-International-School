import { useEffect, useRef } from 'react'

export default function useCustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let raf = 0
    let x = -100
    let y = -100
    const paint = () => {
      raf = 0
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top = `${y}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`
        ringRef.current.style.top = `${y}px`
      }
    }
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      const interactive =
        e.target instanceof Element &&
        e.target.closest('a, button, input, select, textarea, label, [role="button"]')
      ringRef.current?.classList.toggle('is-hovering', Boolean(interactive))
      dotRef.current?.classList.toggle('is-hovering', Boolean(interactive))
      if (!raf) raf = requestAnimationFrame(paint)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return { dotRef, ringRef }
}
