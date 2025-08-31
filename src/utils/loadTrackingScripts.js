// utils/loadTrackingScripts.js

export const loadTrackingScripts = (options = {}) => {
  const { gaId = "G-Y6VTFMY2QP", pixelId = "YOUR_PIXEL_ID" } = options;

  if (typeof window === "undefined") return;

  // Prevent double-loading
  if (window.__trackingLoaded) return;
  window.__trackingLoaded = true;

  // ---- Google Analytics 4 ----
  if (!document.getElementById("ga4-lib")) {
    const gaScript = document.createElement("script");
    gaScript.id = "ga4-lib";
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      gaId
    )}`;
    document.head.appendChild(gaScript);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  window.gtag("config", gaId, {
    anonymize_ip: true,
  });

  // ---- Meta Pixel ----
  (function (f, b, e, v, n, t, s) {
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
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script");

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
};
