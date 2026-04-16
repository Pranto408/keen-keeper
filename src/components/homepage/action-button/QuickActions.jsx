"use client";
import { useTimeline } from "@/context/TimelineContext";
import { Phone, MessageSquare, Video } from "lucide-react";
// import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

const btnClass =
  "flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-emerald-200 hover:border-emerald-300 duration-150 active:scale-95 transition-transform text-slate-700";

const QuickActions = ({ friend }) => {
      const { addEntry } = useTimeline();

    const handleClick = (type) => {
        toast(`${type} to ${friend.name}`);
            addEntry(friend, type);

  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button onClick={() => handleClick("Call")} className={btnClass}>
        <Phone size={24} className="mb-2" />
        <span className="text-sm font-medium">Call</span>
      </button>

      <button onClick={() => handleClick("Text")} className={btnClass}>
        <MessageSquare size={24} className="mb-2" />
        <span className="text-sm font-medium">Text</span>
      </button>

      <button onClick={() => handleClick("Video")} className={btnClass}>
        <Video size={24} className="mb-2" />
        <span className="text-sm font-medium">Video</span>
      </button>
    </div>
  );
};

export default QuickActions;