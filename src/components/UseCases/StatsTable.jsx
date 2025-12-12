import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const StatsTable = ({ title = "Polygon RWA League Table", data = [] }) => {
  const defaultData = [
    { name: "ArgoToken", tvl: 529.69, holders: 7 },
    { name: "Cashlink", tvl: 120.7, holders: 1470 },
    { name: "Mercado Bitcoin", tvl: 111.5, holders: 723 },
    { name: "Beself Brands", tvl: 47.16, holders: 137 },
    { name: "Securitize", tvl: 40.18, holders: 57 },
    { name: "Franklin Templeton", tvl: 31.32, holders: 3 },
    { name: "Spiko", tvl: 28.48, holders: 980 },
    { name: "Kaio", tvl: 20.89, holders: 2 },
    { name: "Binary X", tvl: 3.01, holders: 1580 },
  ];

  const chartData = (data.length > 0 ? data : defaultData).map((item) => ({
    name: item.name,
    value: item.tvl,
  }));

  // Beautiful gradient colors (matching your design)
  const COLORS = [
    "#4F46E5", // indigo-600
    "#6366F1", // indigo-500
    "#818CF8", // indigo-400
    "#A5B4FC", // indigo-300
    "#C7D2FE", // indigo-200
    "#E0E7FF", // indigo-100
    "#4338CA", // indigo-700 (deeper)
    "#3730A3", // indigo-800
    "#312E81", // indigo-900
    "#1E1B4B", // indigo-950 (darkest)
  ];

  const totalTVL = chartData
    .reduce((sum, entry) => sum + entry.value, 0)
    .toFixed(2);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium">{payload[0].name}</p>
          <p className="text-purple-400">
            TVL: ${payload[0].value.toFixed(2)}M
          </p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLegend = (props) => {
    const { payload } = props;
    return (
      <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
        {payload.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-400">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">{title}</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: League Table */}
          <div className="space-y-2">
            {/* Table Header */}
            <div className="grid grid-cols-3 text-sm font-medium text-gray-500 uppercase tracking-wider pb-3 border-b border-gray-400">
              <div>Protocol</div>
              <div className="text-center">TVL</div>
              <div className="text-right">Holders</div>
            </div>

            {/* Table Rows */}
            {(data.length > 0 ? data : defaultData).map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 items-center py-4 px-4 rounded-2xl bg-gray-200/50 border border-gray-200 hover:border-gray-300 hover:bg-gray-300/50 transition-all duration-300"
              >
                <div className="font-medium text-md">{item.name}</div>
                <div className="text-center text-lg font-medium text-indigo-600">
                  ${item.tvl.toFixed(2)}M
                </div>
                <div className="text-right text-gray-500">
                  {item.holders.toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Donut Chart */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Total RWA Value
              <span className="text-sm text-gray-500">ⓘ</span>
            </h3>

            <div className="w-full h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="40%"
                    innerRadius={90}
                    outerRadius={140}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  {/* Center Total Value */}
                  <text
                    x="50%"
                    y="40%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold fill-black"
                  >
                    ${totalTVL}M
                  </text>
                </PieChart>
              </ResponsiveContainer>

              {/* Custom Legend Below Chart */}
              <div className="-mt-16">
                {renderCustomLegend({
                  payload: chartData.map((entry, index) => ({
                    value: entry.name,
                    color: COLORS[index % COLORS.length],
                  })),
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsTable;
