const GA_ID = "G-5QKPWH74B2";
const META_PIXEL_ID = "787975693769665";

export const disableTracking = () => {
  if (typeof window === "undefined") return;

  // Disable GA
  window[`ga-disable-${GA_ID}`] = true;

  // Revoke Meta consent
  if (window.fbq) {
    window.fbq("consent", "revoke");
  }

  console.log("🚫 Tracking disabled");
};

export const enableTracking = () => {
  // Re-enable GA
  delete window[`ga-disable-${GA_ID}`];

  // Grant Meta consent
  if (window.fbq) {
    window.fbq("consent", "grant");
  }

  console.log("✅ Tracking enabled");
};

export const loadTrackingScripts = () => {
  if (typeof window === "undefined") return;
  if (window.__trackingLoaded) return;

  window.__trackingLoaded = true;

  /* ---------- GA ---------- */
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

  gaScript.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_ID, {
      anonymize_ip: true,
      send_page_view: false,
    });

    sendPageView();
    console.log("✅ GA ready");
  };

  document.head.appendChild(gaScript);

  /* ---------- META ---------- */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  window.fbq("init", META_PIXEL_ID);
  window.fbq("consent", "grant");
  window.fbq("track", "PageView");

  console.log("✅ Meta Pixel ready");
};

export const sendPageView = (path) => {
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path || window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
  });

  console.log("📄 Page view sent");
};
