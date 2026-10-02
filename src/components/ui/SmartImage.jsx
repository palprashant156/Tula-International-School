export default function SmartImage({ src, alt, eager = false, ...rest }) {
  const handleError = (e) => {
    if (e.target.dataset.fbk) return
    e.target.dataset.fbk = '1'
    e.target.style.display = 'none'
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      {...rest}
    />
  )
}
