export const calculateRisk = ({
  weeklyRainfall = 0,
  complaints = 0,
  historicalScore = 0,
}) => {
  weeklyRainfall = Number(weeklyRainfall) || 0;
  complaints = Number(complaints) || 0;
  historicalScore = Number(historicalScore) || 0;

  let score = 0;

  score += weeklyRainfall * 0.25;  
  score += complaints * 1.2;       
  score += historicalScore * 0.15;  

  score = Math.min(100, Math.round(score));

  return {
    score,
    level:
      score >= 70
        ? "high"
        : score >= 40
        ? "medium"
        : "low",
  };
};
