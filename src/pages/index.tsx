import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { Logo } from "~/components/logo/logo";
import { SpecialText } from "~/components/special-text/special-text";
import { api } from "~/utils/api";

export default function Home() {

  return (
    <div className="w-full flex justify-center">
      <div className='w-[1440px] h-[900px] bg-[url("/bg-image.png")] bg-no-repeat relative'>
        <div className="h-full w-full flex">
          <div className="h-full flex items-center pl-8">
            <Logo />
          </div>
          <div className="w-fit absolute -bottom-52 right-60 mb-0 flex items-start justify-end flex-col gap-4 -rotate-90">
            <span className="text-white bg-none font-normal opacity-70 text-8xl">
              HEAR
            </span>
            <span className="text-white bg-none font-normal opacity-70 text-8xl">
              LATEST
            </span>
            <span className="text-white bg-none font-normal opacity-70 text-8xl">
              TOUR
            </span>
            <span className="text-white bg-none font-normal opacity-70 text-8xl">
              SEE
            </span>
            <span className="text-white bg-none font-normal opacity-70 text-8xl">
              SHOP
            </span>
            <span className="text-white bg-none font-normal opacity-70 text-8xl">
              WATCH
            </span>
            <span className="text-white bg-none font-normal opacity-70 text-8xl">
              PERSONAL
            </span>
            <span className="text-white bg-none font-normal opacity-70 text-8xl">
              AID
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}