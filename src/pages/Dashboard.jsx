import MapView from "../map/Mapview";
import AlertsPanel from "../alerts/AlertsPanel";
import KpiCard from "../cards/Kpicard";
import { calculateKPIs } from "../utils/kpiCalculations"; 
import { useWardData } from "../hook/useWardData";

const Dashboard = () => {
  const { wards } = useWardData();
  const kpis = calculateKPIs(wards); 

  return (
    <div className="p-4 h-full min-h-0 flex flex-col gap-4">
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

      <div className="grid grid-cols-12 gap-4 h-110 min-h-0">
        <div className="col-span-8 bg-white rounded-lg shadow p-3 flex flex-col min-h-0">
          <h2 className="text-sm font-semibold mb-2">
            Water-Logging Risk Overview
          </h2>

          <div className="flex-1 min-h-0">
            <MapView
              wardsData={wards} 
              height="100%"
              zoom={11}
              showLegend={false}
              interactive={true}
            />
          </div>
        </div>

        <div className="col-span-4 min-h-0 flex">
          <AlertsPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;