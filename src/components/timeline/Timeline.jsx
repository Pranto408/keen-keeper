"use client";
import { useTimeline } from "@/context/TimelineContext";
import Image from "next/image";
import { Phone, MessageSquare, Video } from "lucide-react";

const icons = {
  Call: <Phone size={16} />,
  Text: <MessageSquare size={16} />,
  Video: <Video size={16} />,
};

const TimelineClient = () => {
  const { timeline } = useTimeline();

  if (timeline.length === 0) {
      return (
        <div className="w-11/12 mx-auto my-6">
          <h1 className="text-2xl font-bold text-slate-800 mb-8">Timeline</h1>
          <div className="flex text-6xl justify-center items-center h-[70vh] text-slate-400">
            No activity
          </div>
        </div>
      );
  }

  return (
    <div className="w-8/12 mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-8">Timeline</h1>
      <div className="flex flex-col gap-4">
        {timeline.map((entry) => (
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
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800">{entry.friendName}</p>
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
    </div>
  );
};

export default TimelineClient;
