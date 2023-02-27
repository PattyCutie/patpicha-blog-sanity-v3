import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between font-bold py-2 px-8 gap-4">
      <div className="border-4 border-pink-600 rounded-full">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/modernportfolio-25952.appspot.com/o/files%2FPattyBeautCode3.png?alt=media&token=5198cf78-8cf1-43db-80be-1ee1ccdb825c"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="flex flex-col text-pink-600 p-2 gap-2 text-sm md:text-xl">
          <h2 className="">
            Modern Web Solution Services
          </h2>
        <Link 
        className="flex justify-end"
        href="/">
          <button className="font-bold border border-pink-600 rounded-full px-2 py-1">Contact</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
