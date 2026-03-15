import type { JSX } from "react";
import amph from "/Amphibian.gif";
export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="min-h-screen p-2 inset-0  flex flex-col justify-center items-center">
      <div className="lg:w-6/12 max-w-4xl  w-full grid grid-cols-1 grid-rows-1 place-content-center relative">
        <img className="absolute size-10 z-10  -top-10 right-20 " src={amph} />
        <main className=" lg:px-20 h-full w-full lg:py-12 px-12 py-8 overflow-y-scroll p-2 relative  rounded-3xl outline outline-2 relative gap-10 lg:gap-20 w-full flex flex-col items-center justify-center bg-neutral-100">
          {children}
        </main>
        <main className="w-full absolute h-full shadow-md bg-black -translate-x-6 lg:-translate-x-9 translate-y-6 lg:translate-y-9 rounded-3xl bg-red-900/50 -z-10 "></main>
      </div>
    </div>
  );
};
