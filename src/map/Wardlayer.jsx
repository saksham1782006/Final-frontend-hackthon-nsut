import React from "react";
import { GeoJSON } from "react-leaflet";
import { riskColor } from "../utils/riskColor";
import wardGeoJson from "../data/geodata.json";
import { cleanGeoJson } from "../utils/cleanGeoJson";

const cleanData = cleanGeoJson(wardGeoJson);

const Wardlayer = ({ wardsData = [] }) => {
  const getWardStats = (wardName) => {
    return wardsData.find((w) => w.ward === wardName) || {};
  };

  return (
    <GeoJSON
      data={cleanData}
      style={(feature) => {
        const wardName = feature.properties?.ward;
        const stats = getWardStats(wardName);
        const currentRisk = stats.riskLevel || "low"; 

        return {
          color: "#1e293b",
          weight: 1,
          fill: true,
          fillColor: riskColor(currentRisk),
          fillOpacity: 0.65,
        };
      }}
      onEachFeature={(feature, layer) => {
        const wardName = feature.properties?.ward;
        const stats = getWardStats(wardName);
        
        layer.bindPopup(
          `<strong>${wardName}</strong><br/>
           Risk: ${stats.riskLevel || "N/A"}<br/>
           Rainfall: ${stats.rainfall || 0} mm<br/> 
           Complaints: ${stats.complaints || 0}`
        );
      }}
    />
  );
};

export default Wardlayer;