const Footer = () => {
  return (
    <footer className="h-11 bg-white border-t border-gray-200 flex items-center justify-between px-6 text-xs text-gray-500">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <span className="font-medium text-gray-600">
          Delhi Water-Logging Risk Map
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-400">
          Data Source: Dummy Data
        </span>
      </div>

    </footer>
  );
};

export default Footer;
