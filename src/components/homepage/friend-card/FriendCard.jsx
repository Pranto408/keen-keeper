import Image from "next/image";

const FriendCard = ({ friend }) => {
  // Logic to determine status badge colors based on your JSON data
  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "on-track": "bg-emerald-500 text-white",
    "almost due": "bg-amber-400 text-white",
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white shadow-sm rounded-2xl w-full border border-gray-100 hover:shadow-lg">
      {/* Profile Image */}
      <div className="relative w-32 h-32 mb-6">
        <Image
          src={friend.picture}
          alt={friend.name}
          fill
          className="rounded-full object-cover border-4 border-gray-50"
          sizes="128px"
        />
      </div>

      {/* Identity Info */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-slate-800 leading-tight">
          {friend.name}
        </h2>
        <p className="text-slate-400 font-medium">
          {friend.days_since_contact}d ago
        </p>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-[#244D3F] text-xs bg-[#CBFADB] p-1 rounded-full  font-bold uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Dynamic Status Badge */}
      <div className="w-full text-center">
        <span
          className={`py-1 px-2 rounded-full  font-medium capitalize ${statusStyles[friend.status] || "bg-gray-400"}`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
