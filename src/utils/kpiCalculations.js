export const calculateKPIs = (wards = []) => {
  if (!wards.length) {
    return {
      activeHighRiskWards: 0,
      totalComplaints: 0,
      avgRainfall: 0,
      maxRainfall: 0,
      highRiskZones: 0,
    };
  }

  const highRiskWards = wards.filter(
    (w) => w.riskLevel === "high"
  );

  const totalComplaints = wards.reduce(
    (sum, w) => sum + Number(w.complaints || 0),
    0
  );

  const totalRainfall = wards.reduce(
    (sum, w) => sum + Number(w.rainfall || 0),
    0
  );

  const avgRainfall = Number(
    (totalRainfall / wards.length).toFixed(1)
  );

  const maxRainfall = Math.max(
    ...wards.map((w) => Number(w.rainfall || 0))
  );

  return {
    activeHighRiskWards: highRiskWards.length,
    totalComplaints,
    avgRainfall,
    maxRainfall,
    highRiskZones: highRiskWards.length, // zone-level later
  };
};
