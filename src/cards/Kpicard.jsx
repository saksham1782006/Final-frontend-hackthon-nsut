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
  const getGradientClass = () => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('high-risk') || titleLower.includes('active')) {
      return 'bg-gradient-to-br from-red-50 via-white to-orange-50';
    } else if (titleLower.includes('complaints')) {
      return 'bg-gradient-to-br from-gray-50 via-white to-slate-50';
    } else if (titleLower.includes('rainfall')) {
      return 'bg-gradient-to-br from-cyan-50 via-white to-blue-50';
    }
    
    return 'bg-gradient-to-br from-white to-gray-50';
  };

  return (
    <div className={`${getGradientClass()} rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between`}>

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
