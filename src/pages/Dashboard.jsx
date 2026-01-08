import MapView from "../map/Mapview";
import AlertsPanel from "../alerts/AlertsPanel";
import KpiCard from "../cards/Kpicard";
import { calculateKPIs } from "../utils/kpiCalculations"; 
import { useWardData } from "../hook/useWardData";

const Dashboard = () => {
  const { wards } = useWardData();
  const kpis = calculateKPIs(wards); 

  return (
    <div className="p-6 h-full min-h-0 flex flex-col gap-6 bg-gray-50">
      <div className="grid grid-cols-4 gap-4">
        <KpiCard
          title="Active High-Risk Wards"
          value={kpis.activeHighRiskWards}
          riskLevel="high"
        />

        <KpiCard
          title="Average Rainfall"
          value={kpis.avgRainfall}
          unit="mm"
        />

        <KpiCard
          title="Total Complaints"
          value={kpis.totalComplaints}
        />

        <KpiCard
          title="High-Risk Zones Detected"
          value={kpis.highRiskZones}
          riskLevel="high"
        />
      </div>

      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        <div className="col-span-8 bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col min-h-0 h-full">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-800">
              Water-Logging Risk Overview
            </h2>
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
              Live Map
            </span>
          </div>

          <div className="flex-1 min-h-0 rounded-lg overflow-hidden">
            <MapView
              wardsData={wards} 
              height="100%"
              zoom={11}
              showLegend={true}
              interactive={true}
            />
          </div>
        </div>

        <div className="col-span-4 min-h-0 flex h-full">
          <AlertsPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
