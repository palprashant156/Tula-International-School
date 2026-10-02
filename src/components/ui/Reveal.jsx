import useInView from '../../hooks/useInView.js'

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export function RevealGroup({ children, className = '' }) {
  const [ref, visible] = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`reveal-group${visible ? ' is-visible' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  )
}
