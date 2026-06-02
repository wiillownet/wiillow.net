// Edit this list to change the main buttons on wiillow.net.
// Order here = order on the page.
const LINKS = [
  { label: 'GitHub',    url: 'https://github.com/wiillownet' },
  { label: 'Bluesky',   url: 'https://bsky.app/profile/wiillow.net' },
  { label: 'Instagram', url: 'https://www.instagram.com/wiillownet/' },
  { label: 'YouTube',   url: 'https://www.youtube.com/@wiillownet' },
  // { label: 'Twitter',   url: 'https://x.com/wiillownet' }, // hidden for now
];

// Small pill buttons that sit in the bottom gradient (Wii-style nav).
// Set `icon` to a path under assets/. Up to 3 fit comfortably; more will wrap.
const BOTTOM_NAV = [
  { url: 'https://github.com/wiillownet/wiillow.net', icon: 'assets/github-mark.svg', label: 'View source on GitHub', variant: 'dark' },
];

// Fire a GoatCounter event so each link shows up as its own count.
function trackClick(label) {
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({ path: 'click-' + label, title: label + ' link', event: true });
  }
}

(function renderMainButtons() {
  const container = document.getElementById('buttons');
  if (!container) return;

  for (const { label, url } of LINKS) {
    const a = document.createElement('a');
    a.className = 'wii-btn';
    a.href = url;
    if (/^https?:\/\//.test(url)) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.innerHTML = `
      <span class="wii-btn__gloss-top"></span>
      <span class="wii-btn__gloss-tongue"></span>
      <span class="wii-btn__inner-border"></span>
      <span class="wii-btn__label">${label}</span>
      <span class="wii-btn__highlight"></span>
    `;
    a.addEventListener('click', () => trackClick(label));
    container.appendChild(a);
  }
})();

(function renderBottomNav() {
  const container = document.getElementById('bottom-nav');
  if (!container) return;

  for (const { url, icon, label, variant } of BOTTOM_NAV) {
    const a = document.createElement('a');
    a.className = `nav-pill nav-pill--${variant || 'dark'}`;
    a.href = url;
    a.setAttribute('aria-label', label);
    if (/^https?:\/\//.test(url)) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.innerHTML = `<img class="nav-pill__icon" src="${icon}" alt="" aria-hidden="true" />`;
    a.addEventListener('click', () => trackClick(label));
    container.appendChild(a);
  }
})();
