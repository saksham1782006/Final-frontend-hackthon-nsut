import React from 'react'
import RiskBadge from "./RiskBadge";

const KpiCard = ({
  title,
  value,
  unit,
  trend,      
  trendValue,   
  riskLevel,    
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col justify-between">

      <p className="text-sm text-gray-500 font-medium">
        {title}
      </p>
      <div className="mt-2 flex items-end gap-1">
        <span className="text-3xl font-semibold text-gray-800">
          {value}
        </span>
        {unit && (
          <span className="text-sm text-gray-500 mb-1">
            {unit}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        {trend && (
          <div
            className={`text-xs font-medium flex items-center gap-1 ${
              trend === "up"
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {trend === "up" ? "▲" : "▼"}
            {trendValue}
          </div>
        )}
        {riskLevel && <RiskBadge level={riskLevel} />}
      </div>
    </div>
  );
};

export default KpiCard;
