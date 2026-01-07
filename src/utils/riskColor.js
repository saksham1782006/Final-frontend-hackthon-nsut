export const riskColor = (riskLevel = "") => {
  switch (riskLevel.toLowerCase()) {
    case "high":
      return "#ef4444";  
    case "medium":
      return "#facc15";   
    case "low":
      return "#22c55e";   
    default:
      return "#9ca3af";  
  }
};
