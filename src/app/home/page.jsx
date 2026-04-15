import FriendsDashboard from "@/components/homepage/dashboard/FriendsDashboard";
import Friends from "@/components/homepage/friends/Friends";
import { Suspense } from "react";

export const metadata = {
  title: "KeenKeeper | Home"
};
const HomePage = () => {
  return (
    <>
      <FriendsDashboard />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-40">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        }
      >
        <Friends />
      </Suspense>
    </>
  );
};

export default HomePage;
