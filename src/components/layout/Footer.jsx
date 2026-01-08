const Footer = () => {
  return (
    <footer className="h-11 bg-white border-t border-gray-200 flex items-center justify-between px-6 text-xs text-gray-500">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
        <span className="font-semibold text-gray-700">
          Delhi Water-Logging Risk Map
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-500">
          Data Source: <span className="font-medium">Dummy Data</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
