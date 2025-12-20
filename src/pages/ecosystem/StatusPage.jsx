import React, { useEffect, useMemo, useState } from "react";
import StatusHeader from "../../components/Status/StatusHeader";
import ServiceCard from "../../components/Status/ServiceCard";
import IncidentLog from "../../components/Status/IncidentLog";
import Maintenance from "../../components/Status/Maintenance";
import {
  SERVICES as initialServices,
  INCIDENTS as initialIncidents,
  MAINTENANCE as initialMaintenance,
} from "../../data/statusData";

const StatusPage = () => {
  const [services, setServices] = useState(initialServices);
  const [incidents, setIncidents] = useState(initialIncidents);
  const [maintenance] = useState(initialMaintenance);
  const [lastUpdated, setLastUpdated] = useState(new Date().toISOString());

  // derive overall status
  const overall = useMemo(() => {
    const anyDown = services.some((s) => s.status === "down");
    const anyDegraded = services.some((s) => s.status === "degraded");
    const avgUptime =
      services.reduce((acc, s) => acc + (s.uptime24h || 100), 0) /
      services.length;
    return {
      status: anyDown ? "down" : anyDegraded ? "degraded" : "operational",
      uptime24h: avgUptime,
    };
  }, [services]);

  // simulate small changes every 8s to show "live" feel (safe, random)
  useEffect(() => {
    const id = setInterval(() => {
      setServices((prev) =>
        prev.map((s) => {
          // small random jitter
          const jitter =
            Math.random() < 0.3 ? Math.round((Math.random() - 0.5) * 10) : 0;
          const newLatency = Math.max(0, (s.latencyMs || 0) + jitter);
          // random small change in sparkline
          const newSpark = [...(s.sparkline || [])];
          if (newSpark.length > 0) {
            newSpark.push(
              Math.max(
                0,
                newSpark[newSpark.length - 1] +
                  Math.round((Math.random() - 0.5) * 8)
              )
            );
            if (newSpark.length > 12) newSpark.shift();
          }
          // keep status stable but sometimes degrade
          let newStatus = s.status;
          if (Math.random() < 0.02) newStatus = "degraded";
          if (Math.random() < 0.01) newStatus = "operational";
          return {
            ...s,
            latencyMs: newLatency,
            sparkline: newSpark,
            status: newStatus,
          };
        })
      );
      setLastUpdated(new Date().toISOString());
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Top Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-black via-indigo-950/40 to-black pt-20 text-white text-5xl font-semibold">
        <div className="p-6 md:p-10">
          <StatusHeader overall={overall} lastUpdated={lastUpdated} />
        </div>
      </section>

      <section className="bg-white py-22">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Services grid */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>

            {/* Large charts or stats area (placeholder) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold mb-4">Network Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-xs text-slate-500">Block Time</div>
                  <div className="text-xl font-medium">0.92s</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-xs text-slate-500">
                    Validators Active
                  </div>
                  <div className="text-xl font-medium">128 / 133</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-xs text-slate-500">TPS (live)</div>
                  <div className="text-xl font-medium">~542</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Incidents & Maintenance */}
          <div className="space-y-6">
            <IncidentLog incidents={incidents} />
            <Maintenance list={maintenance} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;
