import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
const LeafletMap: FC<MapProps> = ({
  center = [51.505, -0.09],
  zoom = 13,
  height = "400px",
}) => {
  return (
    <div style={{ height, width: "100%" }}>
      {" "}
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {" "}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />{" "}
        <Marker position={center} icon={icon}>
          {" "}
          <Popup>
            {" "}
            A pretty CSS3 popup. <br /> Easily customizable.{" "}
          </Popup>{" "}
        </Marker>{" "}
      </MapContainer>{" "}
    </div>
  );
};
export default LeafletMap;
