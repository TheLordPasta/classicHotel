import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/hotelMap.css";

const iconRed = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
interface MapProps {
  center?: [number, number];
  zoom?: number;
  height?: string;
}
type MarkerData = {
  position: [number, number];
  popupText: string;
};
const markers: MarkerData[] = [
  // Bars / restaurants
  {
    position: [32.0676, 34.7681], // approx for :contentReference[oaicite:1]{index=1} (18 Nahalat Binyamin) :contentReference[oaicite:2]{index=2}
    popupText:
      "The Prince – café/bar with outdoor patio on Nahalat Binyamin, lively nightlife.",
  },
  {
    position: [32.0674, 34.7678], // approx for :contentReference[oaicite:3]{index=3} (29 Nahalat Binyamin) :contentReference[oaicite:4]{index=4}
    popupText:
      "Bicicletta – Mediterranean tapas/bar style courtyard spot on Nahalat Binyamin.",
  },
  {
    position: [32.0679, 34.7683], // approx for :contentReference[oaicite:5]{index=5} (25 Nahalat Binyamin) :contentReference[oaicite:6]{index=6}
    popupText:
      "Vermuteria – stylish tapas & vermouth bar on Nahalat Binyamin 25.",
  },
  {
    position: [32.068, 34.768], // approx for :contentReference[oaicite:7]{index=7} (42 Nahalat Binyamin) :contentReference[oaicite:8]{index=8}
    popupText:
      "Flame Bar – trendy bar on Nahalat Binyamin 42, good for late night.",
  },
  {
    position: [32.067, 34.77], // approx for :contentReference[oaicite:1]{index=1} (Nahalat Binyamin 25) :contentReference[oaicite:2]{index=2}
    popupText:
      "Vermuteria – stylish tapas & vermouth bar at Nahalat Binyamin 25, great for sharing plates and drinks.",
  },
  {
    position: [32.0675, 34.7675], // approx for :contentReference[oaicite:3]{index=3} (Nahalat Binyamin 59) :contentReference[oaicite:4]{index=4}
    popupText:
      "Noema – a food-bar with modern dishes (sashimi, tartare, gnocchi) at Nahalat Binyamin 59.",
  },
  {
    position: [32.0678, 34.7668], // approx for :contentReference[oaicite:5]{index=5} (Nahalat Binyamin 2) :contentReference[oaicite:6]{index=6}
    popupText:
      "Kaful – Persian-soul hummus & home-cooked food near the entrance to the market, at Nahalat Binyamin 2.",
  },
  {
    position: [32.0674, 34.7678], // approx for :contentReference[oaicite:7]{index=7} (Nahalat Binyamin 27) :contentReference[oaicite:8]{index=8}
    popupText:
      "Pereh – one of the pioneering restaurants in the area at Nahalat Binyamin 27.",
  },
  {
    position: [32.0676, 34.7681], // approx for :contentReference[oaicite:9]{index=9} (corner of Nahalat Binyamin & Montefiori) :contentReference[oaicite:10]{index=10}
    popupText:
      "LOULOU – large & trendy restaurant/bar space on the corner of Nahalat Binyamin & Montefiori.",
  },

  // Beaches
  {
    position: [32.0831, 34.7675], // approx for Gordon Beach (J. L. Gordon St 1) :contentReference[oaicite:10]{index=10}
    popupText:
      "Gordon Beach – one of Tel Aviv’s most popular beaches, great for a day by the sea.",
  },
  {
    position: [32.0806, 34.7666], // approx for Frishman Beach (west end of Frishman Street) :contentReference[oaicite:12]{index=12}
    popupText:
      "Frishman Beach – central beach with good amenities and easy accessibility.",
  },
];

const HotelMap: FC<MapProps> = ({
  center = [32.067212145748414, 34.77032223449812],
  zoom = 40,
}) => {
  return (
    <div className="hotel-map-container">
      {" "}
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        {" "}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />{" "}
        <Marker position={center} icon={iconRed}>
          {" "}
          <Popup> We are here </Popup>{" "}
        </Marker>{" "}
        {/* {markers.map((markers) => (
          <Marker position={markers.position} icon={icon}>
            <Popup>{markers.popupText}</Popup>
          </Marker>
        ))} */}
      </MapContainer>{" "}
    </div>
  );
};
export default HotelMap;
