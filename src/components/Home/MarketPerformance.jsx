import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "11/02", price: 0.297 },
  { date: "11/03", price: 0.296 },
  { date: "11/04", price: 0.28 },
  { date: "11/05", price: 0.286 },
  { date: "11/06", price: 0.289 },
  { date: "11/07", price: 0.286 },
  { date: "11/10", price: 0.297 },
  { date: "11/12", price: 0.298 },
  { date: "11/14", price: 0.294 },
  { date: "11/18", price: 0.292 },
  { date: "11/20", price: 0.28 },
  { date: "11/24", price: 0.274 },
  { date: "11/26", price: 0.275 },
  { date: "11/28", price: 0.282 },
  { date: "11/30", price: 0.284 },
];

const MarketPerformance = () => {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const handleHover = (i) => {
    setHoverIndex(i);
  };

  return (
    <section className="w-full py-22 bg-[#01021f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold">
          Market Performance
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Listed on over 130 exchanges, CRX connects millions of value investors
          across the globe.
        </p>

        {/* Chart + Side Stats */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 lg:gap-33 ">
          {/* Chart */}
          <div className="md:col-span-3 w-full md:w-[110%] h-56 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} style={{ cursor: "pointer" }}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.18} />{" "}
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                  tickMargin={20}
                />
                <YAxis
                  domain={[0.273, 0.299]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                  tickMargin={20}
                  tickCount={7}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />

                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#6366f1"
                  strokeWidth={1}
                  fill="url(#colorPrice)"
                  dot={(props) => (
                    <RenderDot
                      {...props}
                      hoverIndex={hoverIndex}
                      onHover={handleHover}
                    />
                  )}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Side Stats */}
          <div
            className="
              grid grid-cols-3 gap-1 text-center
              md:flex md:flex-col md:gap-6 md:text-left
              justify-center border-t md:border-t-0 pt-6 md:pt-0
            "
          >
            <div className="flex flex-col gap-2 border-r md:border-r-0">
              <p className="text-xs sm:text-sm text-gray-400">Total Market Cap</p>
              <p className="sm:text-2xl font-medium break-all">$26,224.82M</p>
            </div>

            <div className="flex flex-col gap-2 border-r md:border-r-0">
              <p className="text-xs sm:text-sm text-gray-400">Global Rank</p>
              <p className="sm:text-2xl font-medium">8</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs sm:text-sm text-gray-400">Accounts holding CRX</p>
              <p className="sm:text-2xl font-medium">211.11M</p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 md:mt-14 grid grid-cols-3 border border-gray-300 overflow-hidden text-center">
          <div className="p-3 md:p-6 border-r border-gray-300">
            <p className="text-gray-400 text-xs md:text-lg">Current Price</p>
            <p className="sm:text-2xl md:text-3xl font-medium break-all">$0.276970</p>
          </div>

          <div className="p-3 md:p-6 border-r border-gray-300">
            <p className="text-gray-400 text-xs md:text-lg">Transaction Volume (24h)</p>
            <p className="sm:text-2xl md:text-3xl font-medium break-all">$692.85M</p>
          </div>

          <div className="p-3 md:p-6">
            <p className="text-gray-400 text-xs md:text-lg">Transaction Count (24h)</p>
            <p className="sm:text-2xl md:text-3xl font-medium">6.93M</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  const price = payload[0].value;

  return (
    <div className="bg-white shadow-xl rounded-sm p-4 min-w-[100px]">
      <div className="flex items-center justify-between mb-2">
        {/* Price */}
        <p className="text-indigo-900 font-semibold text-sm">
          Price ${price.toFixed(6)}
        </p>

        {/* Date */}
        <p className="text-gray-400 text-xs">{label}</p>
      </div>

      {/* Stats Example */}
      <p className="text-gray-400 text-xs">
        Transaction Volume: <span className="text-gray-400">$729.22M</span>
      </p>
      <p className="text-gray-400 text-xs">
        Transaction Count: <span className="text-gray-400">7.43M</span>
      </p>
    </div>
  );
};

const RenderDot = (props) => {
  const { cx, cy, index, hoverIndex } = props;
  const isHover = index === hoverIndex;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={isHover ? 6 : 3}
      fill={isHover ? "#6366f1" : "#ffffff"}
      stroke="#6366f1"
      strokeWidth={1}
      style={{ transition: "all 1s ease-in-out", cursor: "pointer" }}
      onMouseEnter={() => props.onHover(index)}
      onMouseLeave={() => props.onHover(null)}
    />
  );
};

export default MarketPerformance;
