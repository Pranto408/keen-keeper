"use client";
import { useTimeline } from "@/context/TimelineContext";
import { Phone, MessageSquare, Video } from "lucide-react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const icons = {
  Call: <Phone size={16} />,
  Text: <MessageSquare size={16} />,
  Video: <Video size={16} />,
};

const COLORS = {
  Call: "#10b981",
  Text: "#3b82f6",
  Video: "#f59e0b",
};

const StatsClient = () => {
  const { timeline } = useTimeline();

  const chartData = ["Call", "Text", "Video"]
    .map((type) => ({
      name: type,
      value: timeline.filter((e) => e.type === type).length,
      fill: COLORS[type],
    }))
    .filter((d) => d.value > 0);

  return (
    <div className="w-11/12 md:w-8/12 mx-auto p-5 mt-6 mb-15">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Stats</h1>
      {timeline.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh] text-slate-300 text-5xl font-bold">
          No Interactions
        </div>
      ) : (
        <div className="bg-white border border-slate-100 rounded-xl px-6 py-2 shadow-sm">
          <div className="flex justify-center">
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "60vh",
                aspectRatio: 1,
              }}
            >
              <Pie
                data={chartData}
                innerRadius="60%"
                outerRadius="80%"
                cornerRadius="50%"
                paddingAngle={5}
                dataKey="value"
              ></Pie>
              <Tooltip
                formatter={(value, name) => [`${value} times`, name]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <Legend
                iconType="circle"
                wrapperStyle={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: window.innerWidth < 640 ? "column" : "row",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              />
            </PieChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsClient;
