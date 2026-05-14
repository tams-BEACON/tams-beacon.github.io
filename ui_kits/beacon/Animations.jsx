/*
 * Animations.jsx
 * Exports: FadeIn (scroll-triggered fade in + out), useMountFade (load stagger)
 */

/**
 * FadeIn — fades + slides up when entering the scroll root, fades out when scrolled past.
 * Props: delay (ms), style (merged onto wrapper div)
 */
function FadeIn({ children, delay = 0, style = {} }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const visibleRef = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use the app's scroll container as root so observer fires correctly
    const scrollRoot = document.getElementById('scroll-root') || null;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visibleRef.current = true;
          setVisible(true);
        } else if (visibleRef.current) {
          // Determine if element scrolled above the root (not below/not yet reached)
          const rootTop = entry.rootBounds ? entry.rootBounds.top : 0;
          if (entry.boundingClientRect.top < rootTop) {
            visibleRef.current = false;
            setVisible(false);
          }
        }
      },
      {
        root: scrollRoot,
        threshold: 0.08,
        rootMargin: '0px 0px -24px 0px',
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(18px)',
      transition: `opacity 0.65s cubic-bezier(0.25,0,0,1) ${delay}ms, transform 0.65s cubic-bezier(0.25,0,0,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/**
 * useMountFade — staggered fade-in on component mount (not scroll-driven).
 * Returns a style-getter: mountFade(0) for first element, mountFade(1) for second, etc.
 */
function useMountFade(baseDelay = 60, step = 90) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (i = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.65s cubic-bezier(0.25,0,0,1) ${baseDelay + i * step}ms, transform 0.65s cubic-bezier(0.25,0,0,1) ${baseDelay + i * step}ms`,
  });
}

Object.assign(window, { FadeIn, useMountFade });
