import AlertItem from "./AlertItem";
import { useWardData } from "../hook/useWardData";
const AlertsPanel = () => {
  const { wards } = useWardData();

  const alerts = wards.filter(
    (ward) => ward.riskLevel === "high"
  );

  return (
    <div className="bg-white rounded-lg shadow h-full flex flex-col min-h-0">
      <div className="px-4 py-3 border-b shrink-0">
        <h3 className="text-sm font-semibold text-gray-800">
          Alerts Panel
        </h3>
        <p className="text-xs text-gray-500">
          High-risk wards requiring attention
        </p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {alerts.map((ward) => (
          <AlertItem
            key={ward.ward_id}
            ward={ward.ward}
            zone={ward.zone}
            riskLevel={ward.riskLevel}
            riskScore={ward.riskScore}
            rainfall={ward.rainfall}
            complaints={ward.complaints}
          />
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;
