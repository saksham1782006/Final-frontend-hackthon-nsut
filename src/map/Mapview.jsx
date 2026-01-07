import { MapContainer, TileLayer } from "react-leaflet";
import Wardlayer from "./Wardlayer";
import Legend from "./Legend";

const DELHI_BOUNDS = [
  [28.40, 76.85],
  [28.90, 77.35],
];

const Mapview = ({
  wardsData = [], 
  height = "100%",
  showLegend = true,
  zoom = 11,
  interactive = true,
}) => {
  return (
    <div className="relative w-full" style={{ height }}>
      <MapContainer
        bounds={DELHI_BOUNDS}
        zoom={zoom}
        scrollWheelZoom={interactive}
        dragging={interactive}
        zoomControl={interactive}
        maxBounds={DELHI_BOUNDS}
        minZoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Wardlayer wardsData={wardsData} />
      </MapContainer>

      {showLegend && <Legend />}
    </div>
  );
};

export default Mapview;