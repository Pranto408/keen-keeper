"use client";

import { useSearchParams } from "next/navigation";

const TimelineClient = () => {
  const searchParams = useSearchParams();
  const msg = searchParams.get("msg");

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Timeline</h2>

      {msg && (
        <div className="bg-emerald-100 text-emerald-800 p-4 rounded-lg">
          🔔 {msg}
        </div>
      )}
    </div>
  );
};

export default TimelineClient;
