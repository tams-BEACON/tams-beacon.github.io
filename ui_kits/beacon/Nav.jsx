/* Nav component styles */
const navStyles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 48px', height: '64px',
    background: '#FFFFFF', borderBottom: '1px solid #E4E4E4',
  },
  navScrolled: {
    boxShadow: '0 1px 3px rgba(10,10,10,0.08)',
  },
  logo: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '15px', fontWeight: 700,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    cursor: 'pointer', color: '#0A0A0A',
    display: 'flex', alignItems: 'center', gap: '10px',
  },
  logoImg: { height: '36px', imageRendering: 'pixelated' },
  links: { display: 'flex', gap: '32px', alignItems: 'center' },
  link: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#727272', cursor: 'pointer', background: 'none', border: 'none',
    padding: 0,
  },
  linkActive: { color: '#0A0A0A' },
  cta: {
    fontFamily: '"Times New Roman", Georgia, serif',
    fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase', background: '#0A0A0A', color: '#FFFFFF',
    border: 'none', padding: '9px 20px', borderRadius: '2px', cursor: 'pointer',
  },
};

function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [hoverCta, setHoverCta] = React.useState(false);

  React.useEffect(() => {
    const el = document.getElementById('scroll-root');
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 10);
    el.addEventListener('scroll', fn);
    return () => el.removeEventListener('scroll', fn);
  }, []);

  const links = ['Home', 'Events', 'Team', 'Apply'];

  return (
    <nav style={{ ...navStyles.nav, ...(scrolled ? navStyles.navScrolled : {}) }}>
      <div style={navStyles.logo} onClick={() => setPage('Home')}>
        <img src="../../assets/shiba_inu.png" style={navStyles.logoImg} alt="BEACON" />
        B.E.A.C.O.N.
      </div>
      <div style={navStyles.links}>
        {links.filter(l => l !== 'Apply').map(l => (
          <button key={l} style={{ ...navStyles.link, ...(page === l ? navStyles.linkActive : {}) }}
            onClick={() => setPage(l)}>
            {l}
          </button>
        ))}
      </div>
      <button style={{ ...navStyles.cta, background: hoverCta ? '#E8891A' : '#0A0A0A' }}
        onMouseEnter={() => setHoverCta(true)} onMouseLeave={() => setHoverCta(false)}
        onClick={() => window.open('https://forms.gle/CnEVqQpFcweBwNgJ9', '_blank')}>
        Apply Now
      </button>
    </nav>
  );
}

Object.assign(window, { Nav });
