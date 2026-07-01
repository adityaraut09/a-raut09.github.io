import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Rocket } from './Icons.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/awards', label: 'Awards' },
]

export default function Nav() {
  const { pathname } = useLocation()
  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <Rocket size={18} />
          Aditya Raut
        </NavLink>
        <div className="nav-links">
          {links.map((l) => {
            const active = l.end ? pathname === '/' : pathname.startsWith(l.to)
            return (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={'nav-link' + (active ? ' active' : '')}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {l.label}
              </NavLink>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
