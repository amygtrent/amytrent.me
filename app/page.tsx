import Image from "next/image";
import { Baskervville_SC } from 'next/font/google';
import {Inconsolata} from 'next/font/google';

const baskervvilleSC = Baskervville_SC({ subsets: ['latin'], weight: '400' });
const inconsolata = Inconsolata({ subsets: ['latin'], weight: '400'});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-100 font-sans p-8">
      

      {/* Heading */}
      <Image
      src="/gradPhoto.jpeg"
      alt="Grade Photo"
      width={250}
      height={250}
      className="rounded-full object-cover mb-6 shadow-lg"
      />
      <h1 className={`${baskervvilleSC.className} text-4xl font-bold text-black mb-4 text-center`}>
        Hey, I'm Amy Trent
      </h1>

      {/* Description */}
      <p className="text-lg text-zinc-600 text-center max-w-md mb-8">
        I'm a first year mechanical engineering student at the University of British Columbia.
      </p>

      {/* Placeholder buttons */}
      <div className="flex gap-4">
        <a
          href="/resume_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition"
          >
          Résumé
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
