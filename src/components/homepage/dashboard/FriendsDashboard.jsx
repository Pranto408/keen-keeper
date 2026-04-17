import { Plus } from "lucide-react";
import React from "react";

const FriendsDashboard = () => {
  return (
    <div className=" py-8 ">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Friends to keep close in your life
        </h1>
        <p className="max-w-2xl mx-auto text-slate-500 mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="btn btn-primary bg-[#1e3a34] border-none hover:bg-[#2d574e] text-white normal-case px-8">
          <Plus size={16} /> Add a Friend
        </button>
      </header>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 border-b border-gray-200 pb-10">
        <div className="card bg-white shadow-sm border border-slate-100 flex flex-col items-center justify-center p-10 transition-all hover:shadow-md">
          <div className="text-4xl font-bold text-slate-800 mb-2">8</div>
          <div className="text-sm font-medium text-slate-400 text-center">
            Total Friends
          </div>
        </div>
        <div className="card bg-white shadow-sm border border-slate-100 flex flex-col items-center justify-center p-10 transition-all hover:shadow-md">
          <div className="text-4xl font-bold text-slate-800 mb-2">3</div>
          <div className="text-sm font-medium text-slate-400 text-center">
            On Track
          </div>
        </div>
        <div className="card bg-white shadow-sm border border-slate-100 flex flex-col items-center justify-center p-10 transition-all hover:shadow-md">
          <div className="text-4xl font-bold text-slate-800 mb-2">5</div>
          <div className="text-sm font-medium text-slate-400 text-center">
            Need Attention
          </div>
        </div>
        <div className="card bg-white shadow-sm border border-slate-100 flex flex-col items-center justify-center p-10 transition-all hover:shadow-md">
          <div className="text-4xl font-bold text-slate-800 mb-2">12</div>
          <div className="text-sm font-medium text-slate-400 text-center">
            Interactions This Month
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDashboard;