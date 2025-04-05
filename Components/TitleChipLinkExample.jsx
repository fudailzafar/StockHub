import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const TiltChipLinkExample = () => {
  return (
    <div className="grid place-content-center">
      <TiltChipLink />
    </div>
  );
};

const TiltChipLink = () => {
  return (
    <div className="mb-1.5 w-fit rounded-full bg-zinc-600">
      <a
        href="#"
        rel="nofollow"
        className="flex origin-top-left items-center rounded-full border border-white text-white bg-black p-0.5 text-sm transition-transform hover:-rotate-2"
      >
        <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
          HEY!
        </span>
        <span className="ml-1.5 mr-1 inline-block">
          We've rolled out a new feature!
        </span>
        <FiArrowUpRight className="mr-2 inline-block" />
      </a>
    </div>
  );
};