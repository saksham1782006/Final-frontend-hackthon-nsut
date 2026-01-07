import { riskColor } from "../utils/riskColor";

const AlertItem = ({
  ward,
  zone,
  riskLevel,
  riskScore,
  rainfall,
  complaints,
}) => {
  return (
    <div className="flex items-start gap-3 p-3 border rounded-md bg-white">
      
      <span
        className="w-2.5 h-2.5 rounded-full mt-1"
        style={{ backgroundColor: riskColor(riskLevel) }}
      />

      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">
          {ward}
        </p>

        <p className="text-xs text-gray-500">
          {zone}
        </p>

        <div className="mt-1 text-xs text-gray-600 flex gap-4">
          <span>Rainfall: <b>{rainfall} mm</b></span>
          <span>Complaints: <b>{complaints}</b></span>
        </div>
      </div>

      <span
        className={`text-xs font-semibold px-2 py-0.5 rounded ${
          riskLevel === "high"
            ? "bg-red-100 text-red-700"
            : riskLevel === "medium"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {riskLevel.toUpperCase()}
      </span>
    </div>
  );
};

export default AlertItem;
