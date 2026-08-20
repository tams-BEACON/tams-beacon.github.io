/* HomePage component */
const homeStyles = {
  page: { paddingTop: '64px' },

  /* Hero */
  hero: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '80px 48px 64px', minHeight: '520px',
    borderBottom: '1px solid #E4E4E4',
  },
  heroLeft: { flex: '1', maxWidth: '560px' },
  heroEyebrow: {
    fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#E8891A', marginBottom: '20px', fontFamily: '"Times New Roman", Georgia, serif',
  },
  heroHeading: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '64px', fontWeight: 700, lineHeight: 1.05,
    letterSpacing: '-0.02em', marginBottom: '24px', color: '#0A0A0A',
  },
  heroAccent: { color: '#E8891A' },
  heroSub: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '18px', lineHeight: 1.75, color: '#5A5A5A',
    maxWidth: '440px', marginBottom: '36px',
  },
  heroCtas: { display: 'flex', gap: '12px', alignItems: 'center' },
  btnPrimary: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase', background: '#0A0A0A', color: '#FFFFFF',
    border: 'none', padding: '13px 28px', borderRadius: '2px', cursor: 'pointer',
  },
  btnSecondary: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '12px', fontWeight: 400, letterSpacing: '0.08em',
    textTransform: 'uppercase', background: 'transparent', color: '#0A0A0A',
    border: '1px solid #0A0A0A', padding: '12px 24px', borderRadius: '2px', cursor: 'pointer',
  },
  heroRight: {
    flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '0 0 0 48px',
  },
  mascot: { width: '280px', imageRendering: 'pixelated' },

  /* Acronym strip */
  strip: {
    background: '#0A0A0A', padding: '40px 48px',
    display: 'flex', gap: '0', justifyContent: 'center',
  },
  stripItem: {
    flex: 1, textAlign: 'center', padding: '0 16px',
    borderRight: '1px solid rgba(255,255,255,0.1)',
  },
  stripLetter: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '32px', fontWeight: 700, color: '#E8891A', lineHeight: 1,
    marginBottom: '8px',
  },
  stripWord: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.6)',
  },

  /* Events section */
  section: { padding: '80px 48px' },
  sectionCream: { padding: '80px 48px', background: '#F7F2E8' },
  sectionHeader: {
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
    marginBottom: '40px',
  },
  sectionLabel: {
    fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#E8891A', marginBottom: '10px',
    fontFamily: '"Times New Roman", Georgia, serif',
  },
  sectionTitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2,
  },
  viewAll: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#727272', background: 'none', border: 'none', cursor: 'pointer',
    paddingBottom: '2px', borderBottom: '1px solid #CDCDCD',
  },

  /* Event cards */
  eventGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
  eventCard: {
    background: '#FFFFFF', border: '1px solid #E4E4E4',
    padding: '28px', cursor: 'pointer',
    transition: 'box-shadow 150ms cubic-bezier(0.25,0,0,1)',
  },
  eventDate: {
    fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#9A9A9A', marginBottom: '12px',
    fontFamily: '"Times New Roman", Georgia, serif',
  },
  eventTitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '20px', fontWeight: 700, lineHeight: 1.3, marginBottom: '10px',
  },
  eventDesc: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '14px', lineHeight: 1.6, color: '#5A5A5A',
  },
  eventTag: {
    display: 'inline-block', fontSize: '10px', letterSpacing: '0.1em',
    textTransform: 'uppercase', padding: '3px 8px', borderRadius: '2px',
    marginTop: '16px', fontFamily: '"Times New Roman", Georgia, serif',
  },

  /* Why BEACON pillars */
  pillarsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' },
  pillar: { },
  pillarNumber: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '48px', fontWeight: 700, color: '#E4E4E4', lineHeight: 1,
    marginBottom: '16px',
  },
  pillarTitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '20px', fontWeight: 700, marginBottom: '12px',
  },
  pillarDesc: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '15px', lineHeight: 1.7, color: '#5A5A5A',
  },

  /* CTA banner */
  ctaBanner: {
    background: '#F7F2E8',
    padding: '64px 64px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  ctaText: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '32px', fontWeight: 700, lineHeight: 1.2, maxWidth: '420px',
  },
};

const events = [
  { date: 'August 29, 2026 · 10–11 PM', title: 'Seminar with Shoaib Makani', desc: 'Join Shoaib Makani for a seminar on running a $2.85 billion company.', tag: 'Seminar', tagColor: '#FFFFFF', tagBg: '#0A0A0A', href: 'https://tams-beacon.github.io/ui_kits/beacon/index.html' },
];

function HomePage({ setPage }) {
  const [hoverApply, setHoverApply] = React.useState(false);
  const [hoverViewAll, setHoverViewAll] = React.useState(false);
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const mountFade = useMountFade();

  const acronym = [
    { letter: 'B', word: 'Build' },
    { letter: 'E', word: 'Experiences' },
    { letter: 'A', word: 'And' },
    { letter: 'C', word: 'Career' },
    { letter: 'O', word: 'Opportunities' },
    { letter: 'N', word: 'Now' },
  ];

  return (
    <div style={homeStyles.page}>
      {/* Hero */}
      <section style={homeStyles.hero}>
        <div style={homeStyles.heroLeft}>
          <div style={{...homeStyles.heroEyebrow, ...mountFade(0)}}>TAMS Club · Career Development</div>
          <h1 style={{...homeStyles.heroHeading, ...mountFade(1)}}>
            We open<br />
            <span style={homeStyles.heroAccent}>the door.</span>
          </h1>
          <p style={{...homeStyles.heroSub, ...mountFade(2)}}>
            Name a job. We've got an alum there.
            <br></br>
            BEACON connects TAMS students with any alumni for internships, presentations, and real advice for life after TAMS.
          </p>
          <div style={{...homeStyles.heroCtas, ...mountFade(3)}}>
            <button
              style={{ ...homeStyles.btnPrimary, background: hoverApply ? '#E8891A' : '#0A0A0A' }}
              onMouseEnter={() => setHoverApply(true)}
              onMouseLeave={() => setHoverApply(false)}
              onClick={() => window.open('https://forms.gle/CnEVqQpFcweBwNgJ9', '_blank')}>
              Apply Now
            </button>
            <button style={homeStyles.btnSecondary} onClick={() => setPage('Events')}>
              See Events →
            </button>
          </div>
        </div>
        <div style={{...homeStyles.heroRight, ...mountFade(4)}}>
          <img src="../../assets/shiba_inu.png" style={homeStyles.mascot} alt="BEACON mascot" />
        </div>
      </section>

      {/* Acronym strip */}
      <div style={homeStyles.strip}>
        {acronym.map((item, i) => (
          <div key={i} style={{ ...homeStyles.stripItem, borderRight: i < 5 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
            <div style={homeStyles.stripLetter}>{item.letter}</div>
            <div style={homeStyles.stripWord}>{item.word}</div>
          </div>
        ))}
      </div>

      {/* Why BEACON */}
      <section style={homeStyles.section}>
        <div style={homeStyles.sectionHeader}>
          <div>
            <div style={homeStyles.sectionLabel}>Why BEACON</div>
            <div style={homeStyles.sectionTitle}>Real connections.<br />Real opportunities.</div>
          </div>
        </div>
        <div style={homeStyles.pillarsGrid}>
          {[
            { n: '01', title: 'Industry Access', desc: 'We bring in professionals from business, tech, medical, and more — alum who are willing to share their stories.' },
            { n: '02', title: 'Hands-On Experience', desc: 'Workshops and projects that build skills professionals and professors are actually looking for, not just academic credentials.' },
          ].map((p, pi) => (
            <FadeIn key={p.n} delay={pi * 110}>
              <div style={homeStyles.pillar}>
                <div style={homeStyles.pillarNumber}>{p.n}</div>
                <div style={homeStyles.pillarTitle}>{p.title}</div>
                <div style={homeStyles.pillarDesc}>{p.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Events */}
      <section style={homeStyles.sectionCream}>
        <div style={homeStyles.sectionHeader}>
          <div>
            <div style={homeStyles.sectionLabel}>Upcoming</div>
            <div style={homeStyles.sectionTitle}>Events</div>
          </div>
          <button
            style={{ ...homeStyles.viewAll, borderColor: hoverViewAll ? '#9A9A9A' : '#CDCDCD', color: hoverViewAll ? '#0A0A0A' : '#727272' }}
            onMouseEnter={() => setHoverViewAll(true)}
            onMouseLeave={() => setHoverViewAll(false)}
            onClick={() => setPage('Events')}>
            View All Events →
          </button>
        </div>
        <div style={homeStyles.eventGrid}>
          {events.map((ev, i) => (
            <FadeIn key={i} delay={i * 80}>
              <a
                href={ev.href}
                style={{ ...homeStyles.eventCard, display: 'block', color: 'inherit', textDecoration: 'none', boxShadow: hoveredCard === i ? '0 4px 16px rgba(10,10,10,0.10)' : 'none' }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}>
                <div style={homeStyles.eventDate}>{ev.date}</div>
                <div style={{ ...homeStyles.eventTitle, transition: 'color 200ms cubic-bezier(0.25,0,0,1)', color: hoveredCard === i ? '#E8891A' : '#0A0A0A' }}>{ev.title}</div>
                <div style={homeStyles.eventDesc}>{ev.desc}</div>
                <span style={{ ...homeStyles.eventTag, background: ev.tagBg, color: ev.tagColor }}>{ev.tag}</span>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <FadeIn>
        <div style={homeStyles.ctaBanner}>
          <div style={homeStyles.ctaText}>Your career starts with a conversation.</div>
          <button
            style={{ ...homeStyles.btnPrimary, fontSize: '13px', padding: '14px 32px', background: '#E8891A' }}
            onClick={() => window.open('https://forms.gle/CnEVqQpFcweBwNgJ9', '_blank')}>
            Apply to BEACON →
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

Object.assign(window, { HomePage });
