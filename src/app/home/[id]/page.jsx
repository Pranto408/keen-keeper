import QuickActions from "@/components/homepage/action-button/QuickActions";
import {
  BellRing,
  Archive,
  Trash2,
  Phone,
  MessageSquare,
  Video,
  Mail,
  Edit3,
} from "lucide-react";
import Image from "next/image";

const FriendDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://keen-keeper-bice.vercel.app/friends.json", {
    cache: "no-store",
  });

  const friends = await res.json();
  const friend = friends.find((f) => f.id == id);

  if (!friend) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-error">Friend not found 😢</h2>
      </div>
    );
  }

  return (
    <div className="w-10/13 mx-auto mt-10 p-6 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Sidebar*/}
        <div className="flex flex-col gap-4">
          <div className="card bg-base-100 shadow-sm border border-slate-100 p-8 items-center text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-slate-100 ring-offset-base-100 ring-offset-2">
                <Image
                  fill
                  src={friend.picture}
                  alt={friend.name}
                  className="rounded-full object-cover border-4 border-gray-50"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-800">{friend.name}</h2>

            <div className="flex flex-wrap gap-2 my-3 justify-center">
              <span
                className={`badge border-none text-white uppercase text-[10px] font-bold p-3 ${
                  friend.status === "overdue" ? "bg-red-500" : "bg-orange-400"
                }`}
              >
                {friend.status}
              </span>
              {friend.tags?.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-success badge-outline bg-emerald-50 text-emerald-700 uppercase text-[10px] font-bold p-3"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="italic text-slate-500 text-sm mb-2 px-4 leading-relaxed">
              &quot;{friend.bio}&quot;
            </p>
            <p className="text-slate-400 text-xs flex items-center gap-1">
              Preferred :
              <span className="text-slate-600 font-medium">{friend.email}</span>
            </p>
          </div>

          {/*Buttons not working*/}
          <div className="flex flex-col gap-2 ">
            <button className="btn btn-ghost bg-white border border-slate-100 normal-case flex justify-center gap-3 text-slate-600">
              <BellRing size={18} /> Snooze 2 Weeks
            </button>
            <button className="btn btn-ghost bg-white border border-slate-100 normal-case flex justify-center gap-3 text-slate-600">
              <Archive size={18} /> Archive
            </button>
            <button className="btn btn-ghost bg-white border border-slate-100 normal-case flex justify-center gap-3 text-red-500 hover:bg-red-50">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Top Stats Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow-sm border border-slate-100 p-6 text-center">
              <span className="text-4xl font-bold text-slate-700">
                {friend.days_since_contact}
              </span>
              <span className="text-slate-400 text-sm mt-1">
                Days Since Contact
              </span>
            </div>
            <div className="card bg-base-100 shadow-sm border border-slate-100 p-6 text-center">
              <span className="text-4xl font-bold text-slate-700">
                {friend.goal}
              </span>
              <span className="text-slate-400 text-sm mt-1">Goal (Days)</span>
            </div>
            <div className="card bg-base-100 shadow-sm border border-slate-100 p-6 text-center">
              <span className="text-2xl font-bold text-emerald-800">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-slate-400 text-sm mt-1">Next Due</span>
            </div>
          </div>

          {/* Relationship Goal Box */}
          <div className="card bg-base-100 shadow-sm border border-slate-100 p-8 relative">
            <button className="btn btn-sm btn-ghost absolute right-6 top-6 bg-slate-50 border border-slate-200 text-slate-500">
              <Edit3 size={14} /> Edit
            </button>
            <h3 className="text-emerald-800 font-bold text-lg mb-4">
              Relationship Goal
            </h3>
            <p className="text-slate-600">
              Connect every{" "}
              <span className="font-bold text-slate-800">
                {friend.goal} days
              </span>
            </p>
          </div>

          {/* Quick Check-In Box */}
          <div className="card bg-base-100 shadow-sm border border-slate-100 p-8">
            <h3 className="text-emerald-800 font-bold text-lg mb-6">
              Quick Check-In
            </h3>
            <QuickActions friend={friend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
