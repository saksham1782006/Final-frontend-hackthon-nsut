import RainfallVsComplaints from "../chart/RainfallVsComplaints";
import RiskTrendChart from "../chart/RiskTrend";
import TopRiskWards from "../chart/TopRiskWards";

function Analytic() {
  return (
    <div className="p-4 h-full min-h-0 overflow-y-auto">

      <div className="grid grid-cols-2 gap-4 mb-4">
        <RainfallVsComplaints />
        <RiskTrendChart />
      </div>

      <div className="w-full">
        <TopRiskWards />
      </div>

    </div>
  );
}

export default Analytic;
