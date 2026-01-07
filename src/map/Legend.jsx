const Legend = () => {
  return (
    <div className="absolute bottom-4 right-4 bg-white p-3 rounded shadow text-sm">
      <h4 className="font-semibold mb-2">Risk Levels</h4>

      <div className="flex items-center gap-2 mb-1">
        <span className="w-3 h-3 bg-green-500 rounded"></span>
        Low
      </div>

      <div className="flex items-center gap-2 mb-1">
        <span className="w-3 h-3 bg-yellow-400 rounded"></span>
        Medium
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-500 rounded"></span>
        High
      </div>
    </div>
  );
};

export default Legend;
