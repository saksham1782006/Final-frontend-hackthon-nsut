import AlertItem from "./AlertItem";
import { useWardData } from "../hook/useWardData";

const AlertsPanel = () => {
  const { wards } = useWardData();

  const alerts = wards.filter(
    (ward) => ward.riskLevel === "high"
  );

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0">
      <div className="px-5 py-4 border-b border-gray-200 bg-gradient-to-r from-red-50 to-orange-50 shrink-0 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
              Alerts Panel
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              High-risk wards requiring attention
            </p>
          </div>
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {alerts.length}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
        {alerts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 py-8">
            <svg
              className="w-16 h-16 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm font-medium">No high-risk alerts</p>
            <p className="text-xs mt-1">All wards are safe</p>
          </div>
        ) : (
          alerts.map((ward) => (
            <AlertItem
              key={ward.ward_id}
              ward={ward.ward}
              zone={ward.zone}
              riskLevel={ward.riskLevel}
              riskScore={ward.riskScore}
              rainfall={ward.rainfall}
              complaints={ward.complaints}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AlertsPanel;
