export const loadTrackingScripts = async () => {
  if (typeof window === "undefined") return;
  if (window.__trackingLoaded) return;
  window.__trackingLoaded = true;

  const clientId = getGAClientId();
  if (!clientId) {
    console.warn("❌ No GA client ID found");
    return;
  }

  try {
    await fetch("https://classichotel.onrender.com/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        events: [
          {
            name: "page_view",
            params: {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
            },
          },
          {
            name: "meta_page_view",
            params: {
              pixel_id: process.env.REACT_APP_PIXEL_ID,
              page_path: window.location.pathname,
            },
          },
        ],
        token: process.env.REACT_APP_TRACKING_SECRET, // Must match TRACKING_TOKEN in .env
      }),
    });
    console.log("✅ Page view tracked via proxy (GA + Meta)");
  } catch (err) {
    console.error("❌ Tracking failed:", err);
  }
};

// Helper to extract GA client ID from cookie
const getGAClientId = () => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("_ga="));
  if (!cookie) return null;

  const value = cookie.split("=")[1];
  const parts = value.split(".");
  return parts.length >= 4 ? `${parts[2]}.${parts[3]}` : null;
};
