/**
 * Centralized smooth navigation helper for Phoenix Creative Labs.
 * Guarantees consistent scrolling across all desktop, mobile, and footer links,
 * accounting for fixed headers and mobile drawers.
 */
export function navigateToSection(target: string, onComplete?: () => void) {
  if (onComplete) {
    onComplete();
  }

  const cleanHref = target.trim();

  // If going to top or home
  if (cleanHref === '#home' || cleanHref === '#' || !cleanHref) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState(null, '', '#home');
    } catch {
      // Safe fallback
    }
    return;
  }

  const targetId = cleanHref.startsWith('#') ? cleanHref.slice(1) : cleanHref;
  
  // Give the mobile drawer a micro-tick to initiate collapse or compute bounding rect
  const performScroll = () => {
    const targetElement = document.getElementById(targetId) || document.querySelector(`[id="${targetId}"]`);

    if (targetElement) {
      // Use scrollIntoView with block start, relying on CSS scroll-margin-top
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch {
        // Safe fallback
      }
    } else {
      // Fallback selector attempt
      const elem = document.querySelector(cleanHref);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback standard hash navigation
        window.location.hash = `#${targetId}`;
      }
    }
  };

  // Immediate attempt, plus fallback RAF for mobile drawer layout transitions
  performScroll();
  setTimeout(performScroll, 50);
}
