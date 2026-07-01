import { motion } from 'framer-motion'
import { Page, Reveal, stagger, item } from '../components/Motion.jsx'

const awards = [
  { tag: 'Rocketry · National', title: 'Rocket ARC Team — Nationally Qualified', when: '2025 – Present', body: 'Designed and built rockets on a nationally competitive rocketry team; qualified for the national competition in May 2026.' },
  { tag: 'Chess · State', title: 'Varsity Chess Team — Neuqua Valley HS', when: '2025 – Present', body: 'Won Sectionals (Jan 2025) and placed 5th at the Illinois State Championship (Feb 2026); qualified for Super Nationals (May 2025).' },
  { tag: 'Cricket · Regional', title: 'State U16 Cricket Team — Illinois', when: '2024 – Present', body: 'Competed on the IL U16 regional cricket team in 2024 and 2025; qualified for national-level competition both years.' },
  { tag: 'Focus', title: 'Core strengths', when: 'Across every role', body: 'Research leadership · problem solving · public speaking · curriculum design · teaching & mentorship.' },
]

const ventures = [
  { org: 'Neuqua Valley × YMCA Chess Camp', role: ' — Founder', date: 'Jan 2024 – Present', meta: 'YMCA · Naperville, IL',
    body: [<>Founded and run a weekly chess program for elementary and middle school students, empowering <strong>400+ students</strong> and continuing.</>, <>Manage enrollment, coordinate with YMCA staff, and deliver structured mentorship individually.</>] },
  { org: 'NVChess+ Tutoring Organization', role: ' — Founder', date: 'Jan 2024 – Present', meta: 'Self-Employed · Naperville, IL',
    body: [<>Provide one-on-one tutoring in chess strategy and academic subjects with personalized lesson plans.</>, <>Established a dedicated 1-on-1 instruction framework for highly personalized learning.</>] },
  { org: 'LaunchPad', role: ' — Founder', date: 'Ongoing', meta: 'Career exploration · Naperville, IL',
    body: [<>Free multi-week career exploration program for grades 2–8, run by high schoolers.</>] },
  { org: 'Freelance Web & Marketing', role: '', date: 'Ongoing', meta: 'Self-Employed · Naperville, IL',
    body: [<>Build HTML/CSS websites from scratch for local businesses.</>] },
]

export default function Awards() {
  return (
    <Page>
      <header className="page-intro">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="eyebrow">§ 03 — Leadership & Activities</div>
          <h1>Awards & Leadership</h1>
          <p>Nationally competitive rocketry and chess, regional cricket, and founded programs
            that have reached hundreds of students.</p>
        </motion.div>
      </header>

      <section className="section">
        <Reveal className="section-head"><span className="num">§ 01</span><h2>Competition & Awards</h2></Reveal>
        <motion.div className="grid2" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          {awards.map((a) => (
            <motion.div className="hcard" key={a.title} variants={item} whileHover={{ y: -3 }}>
              <div className="tag">{a.tag}</div>
              <h3>{a.title}</h3>
              <div className="when">{a.when}</div>
              <p>{a.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <Reveal className="section-head"><span className="num">§ 02</span><h2>Experience & Ventures</h2></Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {ventures.map((v) => (
            <motion.div className="entry" key={v.org} variants={item}>
              <p className="title"><span className="org">{v.org}</span>{v.role}</p>
              <span className="date">{v.date}</span>
              <p className="meta">{v.meta}</p>
              <div className="body">{v.body.map((p, i) => <p key={i}>{p}</p>)}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <Reveal className="section-head"><span className="num">§ 03</span><h2>Education & Interests</h2></Reveal>
        <div className="split">
          <Reveal className="entry" >
            <p className="title"><span className="org">Neuqua Valley High School</span></p>
            <span className="date">Expected May 2028</span>
            <p className="meta">Naperville, IL</p>
            <div className="body">
              <p><strong>Relevant coursework:</strong> AP Computer Science A · Honors Pre-Calculus · Honors Algebra 2/Trig · Honors Biology · Honors Chemistry · Principles of Engineering.</p>
            </div>
          </Reveal>
          <Reveal as="aside" className="sidebar">
            <div className="card">
              <h3>Interests</h3>
              <div className="chips">
                <span className="chip">Machine Learning</span><span className="chip">AI</span>
                <span className="chip">Aerospace</span><span className="chip">Stock Investing</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
