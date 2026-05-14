/* ApplyPage component */
const applyStyles = {
  page: { paddingTop: '64px' },
  layout: {
    display: 'grid', gridTemplateColumns: '1fr 480px', gap: '0',
    minHeight: 'calc(100vh - 64px)',
  },
  sidebar: {
    background: '#0A0A0A', padding: '64px 48px',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  },
  sidebarTop: {},
  sidebarLabel: {
    fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#E8891A', marginBottom: '24px',
    fontFamily: '"Times New Roman", Georgia, serif',
  },
  sidebarTitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '40px', fontWeight: 700, color: '#FFFFFF',
    lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '24px',
  },
  sidebarDesc: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)',
    marginBottom: '48px',
  },
  perks: { display: 'flex', flexDirection: 'column', gap: '20px' },
  perk: { display: 'flex', gap: '16px', alignItems: 'flex-start' },
  perkDot: {
    width: '6px', height: '6px', borderRadius: '50%',
    background: '#E8891A', marginTop: '6px', flexShrink: 0,
  },
  perkText: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5,
  },
  sidebarMascot: {
    display: 'flex', justifyContent: 'center', paddingTop: '48px',
  },

  /* Form */
  formWrap: { padding: '64px 48px', background: '#FFFFFF', overflow: 'auto' },
  formTitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '24px', fontWeight: 700, marginBottom: '8px',
  },
  formSub: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '14px', color: '#727272', marginBottom: '40px',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#3A3A3A',
  },
  input: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '15px', color: '#0A0A0A',
    background: '#FFFFFF', border: '1px solid #E4E4E4',
    padding: '10px 12px', borderRadius: '2px',
    outline: 'none', width: '100%',
  },
  inputFocus: { borderColor: '#0A0A0A' },
  select: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '15px', color: '#0A0A0A',
    background: '#FFFFFF', border: '1px solid #E4E4E4',
    padding: '10px 12px', borderRadius: '2px',
    outline: 'none', width: '100%', appearance: 'none',
  },
  textarea: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '15px', color: '#0A0A0A',
    background: '#FFFFFF', border: '1px solid #E4E4E4',
    padding: '10px 12px', borderRadius: '2px',
    outline: 'none', width: '100%', resize: 'vertical', minHeight: '90px',
  },
  hint: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', color: '#9A9A9A',
  },
  submitBtn: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase', border: 'none',
    padding: '14px 32px', borderRadius: '2px', cursor: 'pointer',
    width: '100%', marginTop: '8px',
  },

  /* Success */
  success: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', textAlign: 'center', padding: '80px 48px',
    gap: '16px',
  },
  successTitle: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '32px', fontWeight: 700,
  },
  successSub: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '16px', color: '#5A5A5A', lineHeight: 1.65, maxWidth: '320px',
  },
};

function ApplyPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [hoverSubmit, setHoverSubmit] = React.useState(false);
  const [focused, setFocused] = React.useState(null);
  const [form, setForm] = React.useState({ name: '', email: '', year: '', major: '', why: '', experience: '' });

  const perks = [
    'Access to industry professionals actively hiring',
    'Resume and interview prep workshops',
    'Exclusive networking events each semester',
    'A community of driven students and alumni',
  ];

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={applyStyles.page}>
        <div style={applyStyles.layout}>
          <div style={applyStyles.sidebar}>
            <div style={applyStyles.sidebarTop}>
              <div style={applyStyles.sidebarLabel}>Application received</div>
              <div style={applyStyles.sidebarTitle}>Welcome to the community.</div>
            </div>
            <div style={applyStyles.sidebarMascot}>
              <img src="../../assets/shiba_inu.png" style={{ width: '180px', imageRendering: 'pixelated' }} alt="BEACON mascot" />
            </div>
          </div>
          <div style={{ ...applyStyles.formWrap, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={applyStyles.success}>
              <img src="../../assets/shiba_inu.png" style={{ width: '100px', imageRendering: 'pixelated' }} alt="" />
              <div style={applyStyles.successTitle}>Application Submitted!</div>
              <div style={applyStyles.successSub}>We'll review your application and reach out within a week. Stay tuned.</div>
              <div style={{ fontFamily: '"Times New Roman",serif', fontSize: '13px', color: '#E8891A', marginTop: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>— The BEACON Team</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={applyStyles.page}>
      <div style={applyStyles.layout}>
        {/* Sidebar */}
        <div style={applyStyles.sidebar}>
          <div style={applyStyles.sidebarTop}>
            <div style={applyStyles.sidebarLabel}>Spring 2026 Cohort</div>
            <div style={applyStyles.sidebarTitle}>Apply to<br />BEACON.</div>
            <div style={applyStyles.sidebarDesc}>Limited spots. Rolling admissions. We're looking for curious, ambitious students who want more than a degree.</div>
            <div style={applyStyles.perks}>
              {perks.map((p, i) => (
                <div key={i} style={applyStyles.perk}>
                  <div style={applyStyles.perkDot}></div>
                  <div style={applyStyles.perkText}>{p}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={applyStyles.sidebarMascot}>
            <img src="../../assets/shiba_inu.png" style={{ width: '160px', imageRendering: 'pixelated' }} alt="BEACON mascot" />
          </div>
        </div>

        {/* Form */}
        <div style={applyStyles.formWrap}>
          <div style={applyStyles.formTitle}>Your Application</div>
          <div style={applyStyles.formSub}>Takes about 5 minutes. We read every response.</div>
          <form style={applyStyles.form} onSubmit={handleSubmit}>
            <div style={applyStyles.row2}>
              <div style={applyStyles.fieldGroup}>
                <label style={applyStyles.label}>Full Name</label>
                <input style={{ ...applyStyles.input, ...(focused === 'name' ? applyStyles.inputFocus : {}) }}
                  value={form.name} onChange={e => update('name', e.target.value)}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                  placeholder="Jane Smith" required />
              </div>
              <div style={applyStyles.fieldGroup}>
                <label style={applyStyles.label}>Email</label>
                <input style={{ ...applyStyles.input, ...(focused === 'email' ? applyStyles.inputFocus : {}) }}
                  value={form.email} onChange={e => update('email', e.target.value)}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  type="email" placeholder="jane@university.edu" required />
              </div>
            </div>
            <div style={applyStyles.row2}>
              <div style={applyStyles.fieldGroup}>
                <label style={applyStyles.label}>Year</label>
                <select style={applyStyles.select} value={form.year} onChange={e => update('year', e.target.value)} required>
                  <option value="">Select year</option>
                  <option>Freshman</option>
                  <option>Sophomore</option>
                  <option>Junior</option>
                  <option>Senior</option>
                </select>
              </div>
              <div style={applyStyles.fieldGroup}>
                <label style={applyStyles.label}>Major</label>
                <input style={{ ...applyStyles.input, ...(focused === 'major' ? applyStyles.inputFocus : {}) }}
                  value={form.major} onChange={e => update('major', e.target.value)}
                  onFocus={() => setFocused('major')} onBlur={() => setFocused(null)}
                  placeholder="e.g. Finance" required />
              </div>
            </div>
            <div style={applyStyles.fieldGroup}>
              <label style={applyStyles.label}>Why do you want to join BEACON?</label>
              <textarea style={{ ...applyStyles.textarea, ...(focused === 'why' ? applyStyles.inputFocus : {}) }}
                value={form.why} onChange={e => update('why', e.target.value)}
                onFocus={() => setFocused('why')} onBlur={() => setFocused(null)}
                placeholder="Be specific — what are you hoping to get out of this?" required />
              <span style={applyStyles.hint}>2–4 sentences is perfect.</span>
            </div>
            <div style={applyStyles.fieldGroup}>
              <label style={applyStyles.label}>Any relevant experience or goals?</label>
              <textarea style={{ ...applyStyles.textarea, ...(focused === 'exp' ? applyStyles.inputFocus : {}) }}
                value={form.experience} onChange={e => update('experience', e.target.value)}
                onFocus={() => setFocused('exp')} onBlur={() => setFocused(null)}
                placeholder="Internships, clubs, projects — or just what you're aiming for." />
              <span style={applyStyles.hint}>Optional, but helpful.</span>
            </div>
            <button type="submit"
              style={{ ...applyStyles.submitBtn, background: hoverSubmit ? '#E8891A' : '#0A0A0A', color: '#FFFFFF' }}
              onMouseEnter={() => setHoverSubmit(true)}
              onMouseLeave={() => setHoverSubmit(false)}>
              Submit Application →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ApplyPage });
