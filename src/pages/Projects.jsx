import { motion } from 'framer-motion'
import { Page, Reveal, stagger, item } from '../components/Motion.jsx'
import { Arrow } from '../components/Icons.jsx'

const projects = [
  {
    name: 'LANDER',
    tagline: 'ACL injury-risk screening from a single phone video',
    url: 'https://landeracl.com',
    role: 'Full-Stack Engineer',
    body: 'Screens athletes for ACL injury risk from one phone video of a jump landing — no lab, no wearables, just a camera. A fatigue-aware model turns a 15-second clip into an actionable risk read.',
    tags: ['Computer vision', 'Sports medicine', 'Full-stack'],
  },
  {
    name: 'Vivantal',
    tagline: "See what the record isn't telling you",
    url: 'https://vivantal.com',
    role: 'Developer · Equity-Audit & Data',
    body: 'Record-intelligence for healthcare that surfaces the open loops in patient charts — missed follow-ups, incomplete referrals, unmonitored medications — and audits whether follow-up is equitable across patient groups. Built the equity-audit engine, significance testing, and data schema.',
    tags: ['Health equity', 'Statistics', 'In-browser engine'],
  },
]

export default function Projects() {
  return (
    <Page>
      <header className="page-intro">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="eyebrow">§ 04 — Projects</div>
          <h1>Projects</h1>
          <p>Two products I help build — one in sports medicine, one in clinical safety.
            Each card links straight to the live site.</p>
        </motion.div>
      </header>

      <section className="section">
        <motion.div className="proj-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          {projects.map((p) => (
            <motion.a
              key={p.name}
              className="proj-card"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <div className="proj-top">
                <span className="proj-name">{p.name}</span>
                <span className="proj-visit">Visit <Arrow /></span>
              </div>
              <div className="proj-tagline">{p.tagline}</div>
              <div className="proj-role">{p.role}</div>
              <p className="proj-body">{p.body}</p>
              <div className="chips">
                {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <div className="proj-url">{p.url.replace('https://', '')}</div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </Page>
  )
}
