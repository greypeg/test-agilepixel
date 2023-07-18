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
        <div className="h-full w-full flex justify-between">
          <div className="h-full flex items-center pl-8">
            <Logo />
          </div>
          <div className="w-fit mb-0 pb-6 flex md:justify-end items-start justify-center flex-col gap-4 md:-rotate-90 md:-bottom-64 md:right-64 md:absolute md:p-0">
            <SpecialText text="HEAR" />
            <SpecialText text="LATEST" />
            <SpecialText text="TOUR" />
            <SpecialText text="SEE" />
            <SpecialText text="SHOP" />
            <SpecialText text="WATCH" />
            <SpecialText text="PERSONAL" />
            <SpecialText text="AID" />
          </div>
        </div>
      </div>
    </div>
  );
}