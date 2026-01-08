import RainfallVsComplaints from "../chart/RainfallVsComplaints";
import RiskTrendChart from "../chart/RiskTrend";
import TopRiskWards from "../chart/TopRiskWards";

function Analytic() {
  return (
    <div className="p-6 h-full min-h-0 overflow-y-auto bg-gray-50">

      <div className="grid grid-cols-2 gap-6 mb-6">
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
