import React from 'react'

const PopupContent = ({ ward }) => {
  return (
    <div className="text-sm">
      <h3 className="font-semibold">{ward?.name}</h3>
      <p>Risk: {ward?.risk}</p>
      <p>Rainfall: {ward?.rainfall} mm</p>
      <p>Complaints: {ward?.complaints}</p>
    </div>
  );
};

export default PopupContent;

