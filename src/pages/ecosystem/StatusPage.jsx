import React, { useEffect, useMemo, useState } from "react";
import StatusHeader from "../../components/Status/StatusHeader";
import ServiceCard from "../../components/Status/ServiceCard";
import IncidentLog from "../../components/Status/IncidentLog";
import Maintenance from "../../components/Status/Maintenance";
import UptimeHistory from "../../components/Status/UptimeHistory";
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
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setSubscribed(true);
    setSubscribeEmail("");
  };

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
    <div className="w-full min-h-screen bg-[#01021f] text-white">
      {/* Top Section */}
      <section className="relative h-[35vh] bg-gradient-to-br from-[#01021f] via-indigo-950/40 to-black pt-20 text-white text-5xl font-semibold">
        <div className="p-6 md:p-10">
          <StatusHeader overall={overall} lastUpdated={lastUpdated} />
        </div>
      </section>

      <section className="border-t border-white/10 py-22">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Services grid */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>

            {/* Large charts or stats area (placeholder) */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Network Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/[0.04] rounded-lg">
                  <div className="text-xs text-gray-500">Block Time</div>
                  <div className="text-xl font-medium text-white">0.92s</div>
                </div>
                <div className="p-4 bg-white/[0.04] rounded-lg">
                  <div className="text-xs text-gray-500">
                    Validators Active
                  </div>
                  <div className="text-xl font-medium text-white">128 / 133</div>
                </div>
                <div className="p-4 bg-white/[0.04] rounded-lg">
                  <div className="text-xs text-gray-500">TPS (live)</div>
                  <div className="text-xl font-medium text-white">~542</div>
                </div>
              </div>
            </div>

            {/* Added: 90-day per-service uptime history */}
            <UptimeHistory services={services} />
          </div>

          {/* Right column: Incidents & Maintenance */}
          <div className="space-y-6">
            <IncidentLog incidents={incidents} />
            <Maintenance list={maintenance} />
          </div>
        </div>
      </section>

      {/* Added: subscribe for incident notifications */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-white">
            Get notified about incidents
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Subscribe for an email the moment a service's status changes.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              className="w-full sm:w-80 px-4 py-3 rounded-full border border-white/15 bg-white/[0.03] text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-400 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="mt-3 text-xs text-emerald-400">
              You're subscribed — thanks!
            </p>
          )}

          <p className="mt-6 text-xs text-gray-500">
            RSS and a public status API are on the roadmap.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;
