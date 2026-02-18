import Image from "next/image";
import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-100 font-sans p-8">
      

      {/* Heading */}
      <h1 className={`${satisfy.className} text-4xl font-bold text-black mb-4 text-center`}>
        Hey, I'm Amy Trent
      </h1>

      {/* Description */}
      <p className="text-lg text-zinc-600 text-center max-w-md mb-8">
        Woohoo
      </p>

      {/* Placeholder buttons */}
      <div className="flex gap-4">
        <a
          href="#"
          className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition"
        >
          Resume
        </a>
        <a
          href="#"
          className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}
