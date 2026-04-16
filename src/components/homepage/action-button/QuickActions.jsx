"use client";

import { useRouter } from "next/navigation";
import { Phone, MessageSquare, Video } from "lucide-react";

const QuickActions = ({ friend }) => {
  const router = useRouter();

  const handleClick = (type) => {
    const message = `${type} to ${friend.name}`;

    router.push(`/timeline?msg=${encodeURIComponent(message)}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleClick("Call")}
        className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl 
        hover:bg-emerald-200 hover:border-emerald-300 duration-150
        active:scale-95 transition-transform text-slate-700"
      >
        <Phone size={24} className="mb-2" />
        <span className="text-sm font-medium">Call</span>
      </button>

      <button
        onClick={() => handleClick("Text")}
        className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl 
        hover:bg-emerald-200 hover:border-emerald-300 duration-150
        active:scale-95 transition-transform text-slate-700"
      >
        <MessageSquare size={24} className="mb-2" />
        <span className="text-sm font-medium">Text</span>
      </button>

      <button
        onClick={() => handleClick("Video")}
        className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl 
        hover:bg-emerald-200 hover:border-emerald-300 duration-150
        active:scale-95 transition-transform text-slate-700"
      >
        <Video size={24} className="mb-2" />
        <span className="text-sm font-medium">Video</span>
      </button>
    </div>
  );
};

export default QuickActions;
