import { FC, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/hotelMap.css";

const MAPBOX_TOKEN =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_MAPBOX_TOKEN_PUBLIC
    : process.env.REACT_APP_MAPBOX_TOKEN_PRIVATE;

mapboxgl.accessToken = MAPBOX_TOKEN!;

mapboxgl.setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true,
);

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

const HotelMap: FC<MapProps> = ({
  center = [34.77032223449812, 32.067212145748414],
  zoom = 16,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    if (map.current) return;

    // --- Initialize map ---
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/thelordpasta/cmiycw10r001a01r28urt6uqc",
      center,
      zoom,
    });

    // --- Marker ---
    new mapboxgl.Marker({ color: "red" })
      .setLngLat(center)
      .setPopup(new mapboxgl.Popup().setText("We are here"))
      .addTo(map.current);

    // --- Desktop: scroll disabled, drag enabled only after overlay clicked ---
    map.current.scrollZoom.disable();
    map.current.dragPan.disable();

    // --- Mobile: pinch zoom + 2-finger drag, disable pitch/rotation ---
    map.current.touchZoomRotate.enable({ around: "center" });
    map.current.touchZoomRotate.disableRotation();

    // --- Zoom buttons ---
    const zoomIn = document.createElement("button");
    zoomIn.innerText = "+";
    zoomIn.className = "mapbox-zoom-button";
    zoomIn.style.position = "absolute";
    zoomIn.style.top = "10px";
    zoomIn.style.right = "10px";
    zoomIn.style.zIndex = "10";
    zoomIn.onclick = () => map.current?.zoomIn();

    const zoomOut = document.createElement("button");
    zoomOut.innerText = "-";
    zoomOut.className = "mapbox-zoom-button";
    zoomOut.style.position = "absolute";
    zoomOut.style.top = "50px";
    zoomOut.style.right = "10px";
    zoomOut.style.zIndex = "10";
    zoomOut.onclick = () => map.current?.zoomOut();

    mapContainer.current?.appendChild(zoomIn);
    mapContainer.current?.appendChild(zoomOut);

    // --- Overlay to block map until clicked ---
    const overlay = document.createElement("div");
    overlayRef.current = overlay;
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.2)"; // very light visible overlay
    overlay.style.zIndex = "5";
    overlay.style.cursor = "grab";

    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      setInteractive(true);
      // Enable drag after click
      map.current?.dragPan.enable();
    });

    mapContainer.current?.appendChild(overlay);

    // --- Optional: observe map visibility to bring overlay back ---
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting && interactive) {
          // Map left viewport → show overlay to prevent accidental drag
          overlay.style.display = "block";
          setInteractive(false);
          map.current?.dragPan.disable();
        }
      },
      { threshold: 0 },
    );

    if (mapContainer.current) {
      observer.observe(mapContainer.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [interactive]);

  return <div ref={mapContainer} className="hotel-map-container"></div>;
};

export default HotelMap;
