/* TeamPage component */
const teamStyles = {
  page: { paddingTop: '64px' },
  hero: {
    padding: '64px 48px 56px',
    borderBottom: '1px solid #E4E4E4',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
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
    fontSize: '17px', color: '#5A5A5A', lineHeight: 1.65, maxWidth: '440px',
  },
  heroCount: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '64px', fontWeight: 700, color: '#E4E4E4', lineHeight: 1,
    letterSpacing: '-0.03em',
  },
  heroCountLabel: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#9A9A9A', marginTop: '4px',
  },

  /* Exec team */
  section: { padding: '64px 48px' },
  sectionCream: { padding: '64px 48px', background: '#F7F2E8' },
  sectionLabel: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#9A9A9A', marginBottom: '32px', borderBottom: '1px solid #E4E4E4',
    paddingBottom: '16px',
  },
  execGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' },
  memberCard: { },
  memberAvatar: {
    width: '100%', paddingBottom: '100%', background: '#F5F5F5',
    marginBottom: '16px', position: 'relative', overflow: 'hidden',
  },
  memberAvatarInner: {
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  memberInitials: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '28px', fontWeight: 700, color: '#9A9A9A',
  },
  memberName: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '17px', fontWeight: 700, marginBottom: '4px',
  },
  memberRole: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase',
    color: '#E8891A', marginBottom: '8px',
  },
  memberMajor: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '13px', color: '#727272',
  },

  /* Members grid */
  membersGrid: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px' },
  memberSmall: { },
  memberSmallAvatar: {
    width: '100%', paddingBottom: '100%', background: '#F5F5F5',
    marginBottom: '10px', position: 'relative',
  },
  memberSmallName: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '14px', fontWeight: 700, marginBottom: '2px',
  },
  memberSmallMajor: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '12px', color: '#9A9A9A',
  },
};

const execTeam = [
  { initials: 'AS', name: 'Ansh Shah', role: 'President', major: 'Engineering', color: '#E8891A' },
  { initials: 'AK', name: 'Ayush Kota', role: 'Engineering Head', major: 'Engineering', color: '#0A0A0A' },
  { initials: 'DB', name: 'Dhanush Boyineni', role: 'Medical Head', major: 'General Science', color: '#0A0A0A' },
  { initials: 'DJ', name: 'Dylan Joseph', role: 'CS Head', major: 'Computer Science to CS', color: '#D4A642' },
  { initials: 'AA', name: 'Aryan Aggarwal', role: 'Business Head', major: 'Computer Science to IT', color: '#5A5A5A' },
];

// const members = [
//   { initials: 'SN', name: 'Sophie N.', major: 'Finance' },
//   { initials: 'CW', name: 'Carlos W.', major: 'CS' },
//   { initials: 'YP', name: 'Yuna P.', major: 'Econ' },
//   { initials: 'BM', name: 'Ben M.', major: 'Marketing' },
//   { initials: 'IR', name: 'Ines R.', major: 'Acctg.' },
//   { initials: 'TK', name: 'Tyler K.', major: 'Finance' },
//   { initials: 'AZ', name: 'Amara Z.', major: 'Stats' },
//   { initials: 'LG', name: 'Luca G.', major: 'Bus. Admin' },
//   { initials: 'NC', name: 'Nia C.', major: 'Econ' },
//   { initials: 'RH', name: 'Ryan H.', major: 'CS' },
//   { initials: 'MF', name: 'Maya F.', major: 'Marketing' },
//   { initials: 'DO', name: 'David O.', major: 'Finance' },
// ];

function TeamPage({ setPage }) {
  const [hoverApply, setHoverApply] = React.useState(false);
  const mountFade = useMountFade();

  return (
    <div style={teamStyles.page}>
      <div style={teamStyles.hero}>
        <div>
          <div style={{...teamStyles.eyebrow, ...mountFade(0)}}>The people behind BEACON</div>
          <h1 style={{...teamStyles.title, ...mountFade(1)}}>Our Team</h1>
          <p style={{...teamStyles.subtitle, ...mountFade(2)}}>Students who believe that the right conversation can change your career trajectory.</p>
        </div>
        <div style={{...{ textAlign: 'right' }, ...mountFade(3)}}>
          <div style={teamStyles.heroCount}>16</div>
          <div style={teamStyles.heroCountLabel}>Active Members</div>
        </div>
      </div>

      {/* Exec team */}
      <div style={teamStyles.section}>
        <div style={teamStyles.sectionLabel}>Executive Board</div>
        <div style={teamStyles.execGrid}>
          {execTeam.map((m, i) => (
            <FadeIn key={i} delay={i * 90}>
              <div style={teamStyles.memberCard}>
                <div style={teamStyles.memberAvatar}>
                  <div style={teamStyles.memberAvatarInner}>
                    <div style={{ ...teamStyles.memberInitials, color: m.color }}>{m.initials}</div>
                  </div>
                </div>
                <div style={teamStyles.memberName}>{m.name}</div>
                <div style={teamStyles.memberRole}>{m.role}</div>
                <div style={teamStyles.memberMajor}>{m.major}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* General members
      <div style={teamStyles.sectionCream}>
        <div style={teamStyles.sectionLabel}>General Members</div>
        <div style={teamStyles.membersGrid}>
          {members.map((m, i) => (
            <FadeIn key={i} delay={i * 40}>
              <div style={teamStyles.memberSmall}>
                <div style={teamStyles.memberSmallAvatar}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontFamily: '"Times New Roman",serif', fontSize: '18px', fontWeight: 700, color: '#CDCDCD' }}>{m.initials}</div>
                  </div>
                </div>
                <div style={teamStyles.memberSmallName}>{m.name}</div>
                <div style={teamStyles.memberSmallMajor}>{m.major}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div> */}

      {/* CTA */}
      <div style={{ padding: '64px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E4E4E4' }}>
        <div>
          <div style={{ fontFamily: '"Times New Roman",serif', fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Want to join the team?</div>
          <div style={{ fontFamily: '"Times New Roman",serif', fontSize: '16px', color: '#5A5A5A' }}>Applications open each semester. We review on a rolling basis.</div>
        </div>
        <button
          style={{ fontFamily: '"Times New Roman",serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: hoverApply ? '#E8891A' : '#0A0A0A', color: '#FFFFFF', border: 'none', padding: '13px 28px', borderRadius: '2px', cursor: 'pointer' }}
          onMouseEnter={() => setHoverApply(true)}
          onMouseLeave={() => setHoverApply(false)}
          onClick={() => window.open('https://forms.gle/CnEVqQpFcweBwNgJ9', '_blank')}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { TeamPage });
