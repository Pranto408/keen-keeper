"use client";
import { useTimeline } from "@/context/TimelineContext";
import Image from "next/image";
import { Phone, MessageSquare, Video, ChevronDown } from "lucide-react";
import { useState } from "react";

const icons = {
  Call: <Phone size={16} />,
  Text: <MessageSquare size={16} />,
  Video: <Video size={16} />,
};

const filters = ["All", "Call", "Text", "Video"];

const TimelineClient = () => {
  const { timeline } = useTimeline();
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);

  const filtered =
    active === "All" ? timeline : timeline.filter((e) => e.type === active);

  return (
    <div className="w-11/12 md:w-8/12 mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Timeline</h1>

      {/* Dropdown */}
      <div className="relative w-52 mb-8">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-emerald-300 transition-all"
        >
          <span className="flex items-center gap-2">
            {active !== "All" && icons[active]}
            {active === "All" ? "Filter timeline" : active}
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-md overflow-hidden">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setActive(f);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors
                  ${
                    active === f
                      ? "bg-emerald-50 text-emerald-700 font-medium"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
              >
                {f !== "All" && icons[f]}
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh] text-slate-300 text-5xl font-bold">
          No Interactions
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-4 shadow-sm"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image
                  fill
                  src={entry.friendPicture}
                  alt={entry.friendName}
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-600">
                  <span className="text-slate-800 font-semibold">
                    {entry.type}
                  </span>
                  {` with ${entry.friendName}`}
                </p>
                <p className="text-slate-400 text-xs">
                  {new Date(entry.date).toLocaleString()}
                </p>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                {icons[entry.type]} {entry.type}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelineClient;