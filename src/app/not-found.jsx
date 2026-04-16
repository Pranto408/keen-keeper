import Link from "next/link";
import { Home } from "lucide-react";

export const metadata = {
  title: "KeenKeeper | Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-blue-50 to-purple-100 text-black relative overflow-hidden">
      {/* Glow */}
      <div className="absolute w-125 h-125 bg-blue-300/30 blur-3xl rounded-full -top-25 -left-25 animate-pulse" />
      <div className="absolute w-100 h-100 bg-purple-300/30 blur-3xl rounded-full -bottom-25 -right-25 animate-pulse" />

      {/* Card */}
      <div className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-2xl p-10 text-center shadow-2xl max-w-md">
        <h1 className="text-7xl font-extrabold bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-4 animate-bounce">
          404
        </h1>

        <p className="text-gray-600 mb-6">
          The page you are looking for could not be found.
        </p>

        {/* Button with Icon */}
        <div className="flex justify-center">
          <Link href="/">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition transform shadow-lg">
              <Home size={18} />
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}