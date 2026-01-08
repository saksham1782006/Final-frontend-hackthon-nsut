import React from "react";

function AboutUs() {
  return (
    <div className="h-full overflow-y-auto px-8 py-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-12 border border-gray-200">

        {/* Title */}
        <header>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight border-b-2 border-blue-500 pb-4">
            ABOUT HYDRO ALERT
          </h1>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            A ward-level rainfall intelligence system built to improve urban
            awareness during heavy rainfall and water-logging events.
          </p>
        </header>

        {/* Overview */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded"></span>
            An Overview of Hydro Alert
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            <span className="font-bold text-blue-600">Hydro Alert</span> is a
            rainfall monitoring and risk-visualization platform focused on
            urban wards. Instead of raw weather numbers, it presents
            <span className="font-semibold"> clear, location-specific insights </span>
            that help users understand where water-logging risks are building
            up during intense rainfall.
          </p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded"></span>
            Hydro Alert's Approach
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            In dense cities, heavy rainfall often turns into flooding,
            traffic paralysis, and public safety hazards. The problem isn't
            just rain — it's the lack of
            <span className="font-semibold"> ward-level visibility </span>.
            Without localized insight, response efforts are delayed and
            decisions are made reactively rather than proactively.
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded"></span>
            What Hydro Alert does differently
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Hydro Alert connects rainfall data directly to city wards and
            presents it through an interactive map, focused alerts, and
            summarized indicators. This turns scattered data into
            <span className="font-semibold"> practical situational awareness </span>
            that can be understood at a glance.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-5 uppercase tracking-wide flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded"></span>
            Core Capabilities
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <span>Rainfall tracking at ward granularity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <span>Identification of high-risk water-logging zones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <span>Map-based visual exploration of risk patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <span>Daily summaries for quick assessment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">•</span>
              <span>Alert-oriented dashboard for focused attention</span>
            </li>
          </ul>
        </section>

        {/* Audience */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded"></span>
            Intended Users
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            The platform is intended for municipal teams, disaster response
            units, urban planners, and citizens who want
            <span className="font-semibold"> calm, clear visibility </span>
            into rainfall-related risks within their city.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
             Data Disclaimer
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            This dashboard is designed for analytical and demonstration use.
            Operational decisions should always rely on verified meteorological
            and municipal data sources.
          </p>
        </section>

      </div>
    </div>
  );
}

export default AboutUs;
