import { FC, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/hotelMap.css";

// Use different tokens for local vs production
const MAPBOX_TOKEN =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_MAPBOX_TOKEN_PUBLIC
    : process.env.REACT_APP_MAPBOX_TOKEN_PRIVATE;

mapboxgl.accessToken = MAPBOX_TOKEN!;

// RTL text plugin (required for Hebrew/Arabic shaping)
mapboxgl.setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true
);

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

const HotelMap: FC<MapProps> = ({
  center = [34.77032223449812, 32.067212145748414], // [lng, lat]
  zoom = 16,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/thelordpasta/cmiycw10r001a01r28urt6uqc",
      center,
      zoom,
    });

    // Add hotel marker
    new mapboxgl.Marker({ color: "red" })
      .setLngLat(center)
      .setPopup(new mapboxgl.Popup().setText("We are here"))
      .addTo(map.current);
  }, []);

  return <div ref={mapContainer} className="hotel-map-container"></div>;
};

export default HotelMap;
