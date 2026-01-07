import React from "react";

function AboutUs() {
  return (
    <div className="h-full overflow-y-auto px-8 py-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-8">

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            About Hydro Alert
          </h1>
          <p className="text-gray-500 mt-2">
            Understanding the purpose and vision behind the platform
          </p>
        </div>

        {/* What is Hydro Alert */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            What is Hydro Alert?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Hydro Alert</strong> is a water-logging risk monitoring and
            visualization platform designed to analyze rainfall impact across
            urban wards. It provides a centralized dashboard to identify
            high-risk areas, visualize rainfall distribution, and support
            timely awareness during heavy rainfall events.
          </p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            The Problem
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Urban flooding and water-logging are recurring challenges in
            densely populated cities. Heavy rainfall often leads to traffic
            congestion, infrastructure stress, and public safety concerns.
            Lack of ward-level visibility makes it difficult to respond
            quickly and effectively.
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Our Solution
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Hydro Alert bridges this gap by combining rainfall data with
            ward-based analysis. Through an interactive map, focused alerts,
            and daily summaries, the platform transforms raw rainfall data
            into clear, actionable insights for decision-makers and citizens.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Ward-level rainfall monitoring</li>
            <li>High-risk area identification</li>
            <li>Interactive map-based visualization</li>
            <li>Daily rainfall summaries and insights</li>
            <li>Alert-focused dashboard design</li>
          </ul>
        </section>

        {/* Audience */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Who is it for?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This platform is intended for municipal authorities, disaster
            response teams, urban planners, and citizens seeking timely
            awareness of water-logging risks within their city.
          </p>
        </section>

        {/* Data Disclaimer */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">
            Data & Disclaimer
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            The data presented in this dashboard is for analytical and
            demonstration purposes. Operational decisions should always be
            based on official meteorological and municipal data sources.
          </p>
        </section>

        {/* Vision */}
        <section>
          <p className="text-gray-700 font-medium">
            Hydro Alert aims to strengthen urban resilience by transforming
            rainfall data into meaningful, actionable insights.
          </p>
        </section>

      </div>
    </div>
  );
}

export default AboutUs;
