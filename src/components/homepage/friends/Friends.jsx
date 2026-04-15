import React from 'react';
import FriendCard from '../friend-card/FriendCard';

const Friends = async () => {
    const res = await fetch(
      "https://keen-keeper-bice.vercel.app/friends.json",
      {
        cache: "no-store",
      },
    );
    const friends = await res.json();
    console.log(friends);
    return (
      <div className="w-11/12 mx-auto">
        <h2 className="py-5 text-2xl font-semibold text-[#1F2937]">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-10">
          {friends.map((friend) => (
            <div key={friend.id} className="">
              <FriendCard friend={friend} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Friends;