import Link from "next/link";
import { Home } from "lucide-react";
export const metadata = {
  title: "KeenKeeper | Not Found",
};
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />

      {/* Card */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 text-center shadow-2xl max-w-md">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4 animate-bounce">
          404
        </h1>

        <p className="text-gray-300 mb-6">
          You’ve wandered into the void. This page doesn’t exist.
        </p>

        {/* Button with Icon */}
        <div className="flex justify-center">
          <Link href="/">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition transform shadow-lg">
              <Home size={18} />
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
