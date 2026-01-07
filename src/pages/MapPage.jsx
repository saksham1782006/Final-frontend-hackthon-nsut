import MapView from "../map/Mapview";
import { useWardData } from "../hook/useWardData"; 

const MapPage = () => {
  const { wards } = useWardData(); 
  return (
    <div className="w-full h-full">
      <MapView
        wardsData={wards}
        interactive={true}
        showLegend={true}
        zoom={11}
      />
    </div>
  );
};

export default MapPage;