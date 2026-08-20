/* EventsPage component */
const eventsStyles = {
  page: { paddingTop: '64px' },
  hero: {
    padding: '64px 48px 48px',
    borderBottom: '1px solid #E4E4E4',
  },
  eyebrow: {
    fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#E8891A', marginBottom: '12px',
    fontFamily: '"Times New Roman", Georgia, serif',
  },
  title: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '52px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05,
    marginBottom: '16px',
  },
  subtitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '17px', color: '#5A5A5A', lineHeight: 1.65, maxWidth: '480px',
  },

  /* Filter tabs */
  filters: {
    display: 'flex', gap: '0', borderBottom: '1px solid #E4E4E4',
    padding: '0 48px',
  },
  filterTab: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
    padding: '16px 0', marginRight: '32px',
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#9A9A9A', borderBottom: '2px solid transparent',
    marginBottom: '-1px',
  },
  filterTabActive: {
    color: '#0A0A0A', borderBottomColor: '#0A0A0A',
  },

  /* Events grid */
  section: { padding: '48px 48px 80px' },
  sectionLabel: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#9A9A9A', marginBottom: '24px',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#E4E4E4' },
  card: {
    background: '#FFFFFF', padding: '32px 28px',
    cursor: 'pointer', transition: 'background 150ms',
  },
  cardHover: { background: '#F7F2E8' },
  cardDate: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#9A9A9A', marginBottom: '14px',
  },
  cardTitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '20px', fontWeight: 700, lineHeight: 1.3, marginBottom: '10px',
  },
  cardDesc: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '14px', lineHeight: 1.6, color: '#5A5A5A', marginBottom: '20px',
  },
  cardMeta: { display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' },
  tag: {
    display: 'inline-block', fontSize: '10px', letterSpacing: '0.1em',
    textTransform: 'uppercase', padding: '3px 8px', borderRadius: '2px',
    fontFamily: '"Times New Roman", Georgia, serif',
  },
  cardLocation: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', color: '#9A9A9A', display: 'flex', alignItems: 'center', gap: '4px',
  },

  /* Past events - list style */
  pastSection: { padding: '0 48px 80px' },
  pastTitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '22px', fontWeight: 700, marginBottom: '24px',
    paddingTop: '40px', borderTop: '1px solid #E4E4E4',
  },
  pastList: { display: 'flex', flexDirection: 'column', gap: '0' },
  pastItem: {
    display: 'flex', alignItems: 'center', gap: '32px',
    padding: '18px 0', borderBottom: '1px solid #E4E4E4',
  },
  pastDate: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#9A9A9A', minWidth: '120px',
  },
  pastName: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '16px', fontWeight: 700, flex: 1,
  },
  pastTagWrap: { minWidth: '100px' },
};

const allEvents = [
  { date: 'August 29, 2026 · 10–11 PM', title: 'Seminar with Shoaib Makani', desc: 'Join Shoaib Makani for a seminar on running a $2.85 billion company.', tag: 'Seminar', tagBg: '#0A0A0A', tagColor: '#FFFFFF', type: 'upcoming', href: 'https://tams-beacon.github.io/ui_kits/beacon/index.html' },
];

const pastEvents = [
  { date: 'March 2026', title: 'Spring 2026 Kickoff', tag: 'Networking', tagBg: '#F5F5F5', tagColor: '#0A0A0A' },
  { date: 'February 2026', title: 'LinkedIn Profile Workshop', tag: 'Workshop', tagBg: '#0A0A0A', tagColor: '#FFFFFF' },
  { date: 'January 2026', title: 'Consulting Case Prep Night', tag: 'Workshop', tagBg: '#0A0A0A', tagColor: '#FFFFFF' },
  { date: 'November 2025', title: 'Alumni Panel: Tech Careers', tag: 'Panel', tagBg: '#E8891A', tagColor: '#FFFFFF' },
  { date: 'October 2025', title: 'Fall Networking Gala', tag: 'Networking', tagBg: '#F5F5F5', tagColor: '#0A0A0A' },
];

function EventsPage() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const filters = ['All', 'Seminar'];
  const mountFade = useMountFade();

  const filtered = activeFilter === 'All' ? allEvents : allEvents.filter(e => e.tag === activeFilter);

  return (
    <div style={eventsStyles.page}>
      <div style={eventsStyles.hero}>
        <div style={{...eventsStyles.eyebrow, ...mountFade(0)}}>What's happening</div>
        <h1 style={{...eventsStyles.title, ...mountFade(1)}}>Events</h1>
        <p style={{...eventsStyles.subtitle, ...mountFade(2)}}>Panels, workshops, and networking nights — all designed to move your career forward.</p>
      </div>

      <div style={eventsStyles.filters}>
        {filters.map(f => (
          <button key={f}
            style={{ ...eventsStyles.filterTab, ...(activeFilter === f ? eventsStyles.filterTabActive : {}) }}
            onClick={() => setActiveFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div style={eventsStyles.section}>
        <div style={eventsStyles.sectionLabel}>Upcoming — {filtered.length} event{filtered.length !== 1 ? 's' : ''}</div>
        <div style={eventsStyles.grid}>
          {filtered.map((ev, i) => (
            <FadeIn key={i} delay={i * 70}>
              <a
                href={ev.href}
                style={{ ...eventsStyles.card, ...(hoveredCard === i ? eventsStyles.cardHover : {}), display: 'block', color: 'inherit', textDecoration: 'none' }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}>
                <div style={eventsStyles.cardDate}>{ev.date}</div>
                <div style={{ ...eventsStyles.cardTitle, transition: 'color 200ms cubic-bezier(0.25,0,0,1)', color: hoveredCard === i ? '#E8891A' : '#0A0A0A' }}>{ev.title}</div>
                <div style={eventsStyles.cardDesc}>{ev.desc}</div>
                <div style={eventsStyles.cardMeta}>
                  <span style={{ ...eventsStyles.tag, background: ev.tagBg, color: ev.tagColor }}>{ev.tag}</span>
                  {ev.location && <span style={eventsStyles.cardLocation}>📍 {ev.location}</span>}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <div style={eventsStyles.pastSection}>
        <div style={eventsStyles.pastTitle}>Past Events</div>
        <div style={eventsStyles.pastList}>
          {pastEvents.map((ev, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div style={eventsStyles.pastItem}>
                <div style={eventsStyles.pastDate}>{ev.date}</div>
                <div style={eventsStyles.pastName}>{ev.title}</div>
                <div style={eventsStyles.pastTagWrap}>
                  <span style={{ ...eventsStyles.tag, background: ev.tagBg, color: ev.tagColor }}>{ev.tag}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EventsPage });
