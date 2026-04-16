"use client";
import { usePathname } from "next/navigation";
import { ChartLine, Clock, House } from "lucide-react";
import Link from "next/link";

const Navber = () => {
  const pathname = usePathname();
  return (
    <div className="z-1 bg-base-100 shadow-sm border-b-2 border-gray-200 sticky top-0">
      <div className="w-11/12 mx-auto navbar flex-col space-y-3 sm:flex-row sm:space-y-0">
        <div className="flex-1">
          <a href={"/"} className=" text-[#1F2937] font-extrabold text-3xl">
            Keen<span className="text-[#244D3F] font-semibold">Keeper</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <Link
                href="/home"
                className={`flex items-center gap-1 font-medium ${
                  pathname === "/home"
                    ? "text-white bg-[#244D3F]"
                    : "text-[#64748B]"
                }`}
              >
                <House size={16} />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/timeline"
                className={`flex items-center gap-1 font-medium ${
                  pathname === "/timeline"
                    ? "text-white bg-[#244D3F]"
                    : "text-[#64748B]"
                }`}
              >
                <Clock size={16} />
                Timeline
              </Link>
            </li>

            <li>
              <Link
                href="/stats"
                className={`flex items-center gap-1 font-medium ${
                  pathname === "/stats"
                    ? "text-white bg-[#244D3F]"
                    : "text-[#64748B]"
                }`}
              >
                <ChartLine size={16} />
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
