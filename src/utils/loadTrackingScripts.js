export const loadTrackingScripts = (options = {}) => {
  const { gaId = "G-5QKPWH74B2", pixelId = "787975693769665" } = options;

  if (typeof window === "undefined") return;
  if (window.__trackingLoaded) return;
  window.__trackingLoaded = true;

  // ---- Google Analytics 4 ----
  const loadGA = () => {
    const gaScript = document.createElement("script");
    gaScript.id = "ga4-lib";
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      gaId
    )}`;
    gaScript.onload = () => {
      console.log("✅ GA script loaded:", gaId);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", gaId, { anonymize_ip: true });
      console.log("✅ GA tracking initialized");
      sendPageView(); // first pageview
    };
    document.head.appendChild(gaScript);
  };

  if (!document.getElementById("ga4-lib")) {
    loadGA();
  }

  // ---- Meta Pixel ----
  const loadPixel = () => {
    if (window.fbq) return;
    (function (f, b, e, v, n, t, s) {
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
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
    console.log("✅ Meta Pixel initialized:", pixelId);
  };

  if (pixelId && pixelId !== "YOUR_PIXEL_ID") {
    loadPixel();
  }
};

export const sendPageView = (path) => {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: path || window.location.pathname,
    });
    console.log("📄 Page view sent:", path || window.location.pathname);
  }
};
