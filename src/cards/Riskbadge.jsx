import React from 'react'

const RiskBadge = ({ level }) => {
  const styles = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded ${
        styles[level] || "bg-gray-100 text-gray-600"
      }`}
    >
      {level?.toUpperCase()}
    </span>
  );
};

export default Riskbadge;
