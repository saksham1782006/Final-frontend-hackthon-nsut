import wardsData from "../data/wards.json";
import rainfallData from "../data/rainfall.json";
import complaintsData from "../data/complaints.json";
import historicalRisk from "../data/riskscore.json";
import { calculateRisk } from "../utils/calculateRisk";

export const useWardData = () => {
  const wards = wardsData.wards.map((ward) => {

    const rainfallWard = rainfallData.wards.find(
      (w) => w.ward_id === ward.ward_id
    );

    const dailyRainfall = rainfallWard?.daily_rainfall || {};

    const weeklyRainfall = Object.values(dailyRainfall).reduce(
      (sum, val) => sum + Number(val || 0),
      0
    );

    const complaintWard = complaintsData.wards.find(
      (w) => w.ward_id === ward.ward_id
    );

    const dailyComplaints = complaintWard?.daily_complaints || {};

    const totalComplaints = Object.values(dailyComplaints).reduce(
      (sum, val) => sum + Number(val || 0),
      0
    );

    const historicalScore = Number(
      historicalRisk[ward.ward_name] || 0
    );

    const risk = calculateRisk({
      weeklyRainfall,
      complaints: totalComplaints,
      historicalScore,
    });

    return {
      ward_id: ward.ward_id,
      ward: ward.ward_name,
      zone: ward.zone,

      rainfall: weeklyRainfall,
      complaints: totalComplaints,
      historicalScore,

      riskScore: risk.score,
      riskLevel: risk.level,
    };
  });

  return { wards };
};
