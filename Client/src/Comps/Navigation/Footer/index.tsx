import React from 'react';
import Link from 'next/link';

export const Comps_Navigation_Footer = () => {
  return (
    <footer className="bg-orange-500 fixed inset-x-0 bottom-0 ">
      <div className="mx-auto  ">
        {/* <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          
        </nav> */}
        <div className="flex justify-center my-3 space-x-12">
          <Link href="/">
            <button
              type="button"
              className="inline-flex items-center px-6 py-1 border border-white shadow-sm text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Home
            </button>
          </Link>
          <Link href="/newEntry">
            <button
              type="button"
              className="inline-flex items-center px-6 py-1 border border-white shadow-sm text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Add Entry
            </button>
          </Link>
          <Link href="/Route">
            <button
              type="button"
              className="inline-flex items-center px-6 py-1 border border-white shadow-sm text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Route
            </button>
          </Link>
          <Link href="/Logs">
            <button
              type="button"
              className="inline-flex items-center px-6 py-1 border border-white shadow-sm text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Entries
            </button>
          </Link>
        </div>
        {/* <p className="mt-8 text-base text-center text-gray-400">&copy; {new Date().getFullYear()} My Company Page, Inc. All rights reserved.</p> */}
      </div>
    </footer>
  );
};
