import Image from "next/image";
import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black font-sans p-8">
      

      {/* Heading */}
      <h1 className={`${satisfy.className} text-4xl font-bold text-black dark:text-zinc-50 mb-4 text-center`}>
        Hey, I'm Amy Trent
      </h1>

      {/* Description */}
      <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-md mb-8">
        This is my first Next.js site. You can edit this text in <code>page.tsx</code> and see changes instantly.
      </p>

      {/* Placeholder buttons */}
      <div className="flex gap-4">
        <a
          href="#"
          className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition"
        >
          Button 1
        </a>
        <a
          href="#"
          className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
        >
          Button 2
        </a>
      </div>
    </div>
  );
}
