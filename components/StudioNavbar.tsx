import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { NavbarProps } from "sanity";
function StudioNavbar(props: NavbarProps) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#F9CCD3] gap-2">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F9CCD3] hover:scale-105" />
          Go to website
        </Link>

        <div className="border p-2 rounded-sm">
          <h1 className="text-[#F9CCD3]">You are now in Content studio </h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
