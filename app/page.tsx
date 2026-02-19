import Image from "next/image";
import { Baskervville_SC } from 'next/font/google';
import { Inconsolata } from 'next/font/google';

const baskervvilleSC = Baskervville_SC({ subsets: ['latin'], weight: '400' });
const inconsolata = Inconsolata({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      {/* Intro Section */}
      <div className="flex h-3/4 flex-col items-center justify-center bg-blue-200 font-sans p-8 relative overflow-hidden">
  {/* Left Gear */}
<svg
  className="absolute -left-40 top-1/4 w-64 h-64 text-black opacity-30 animate-spin-slow"
  viewBox="0 0 100 100"
  fill="currentColor"
>
  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none" />
  {/* Gear teeth */}
  {[...Array(12)].map((_, i) => {
    const angle = (i * 360) / 12;
    return (
      <rect
        key={i}
        x="47"
        y="0"
        width="6"
        height="12"
        rx="1"
        ry="1"
        transform={`rotate(${angle} 50 50)`}
      />
    );
  })}
</svg>

{/* Right Gear */}
<svg
  className="absolute -right-40 bottom-1/4 w-72 h-72 text-black opacity-20 animate-spin-slow-reverse"
  viewBox="0 0 100 100"
  fill="currentColor"
>
  <circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="6" fill="none" />
  {[...Array(16)].map((_, i) => {
    const angle = (i * 360) / 16;
    return (
      <rect
        key={i}
        x="48"
        y="0"
        width="4"
        height="10"
        rx="0.5"
        ry="0.5"
        transform={`rotate(${angle} 50 50)`}
      />
    );
  })}
</svg>



        <Image
          src="/gradPhoto.jpeg"
          alt="Grade Photo"
          width={200}
          height={200}
          className="rounded-full object-cover mb-6 shadow-lg"
        />
        <h1 className={`${baskervvilleSC.className} text-4xl font-bold text-black mb-4 text-center`}>
          Hey, I'm Amy Trent
        </h1>
        <p className="text-lg text-black text-center max-w-md mb-8">
          I'm a first year mechanical engineering student at the University of British Columbia.
        </p>

        <div className="flex gap-4">
          <a
            href="/resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
          >
            Résumé
          </a>
          <a
            href="https://www.linkedin.com/in/amy-trent-b80944392/"
            className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="min-h-screen bg-white flex flex-col items-center justify-start p-8">
        <h2 className="text-3xl font-medium text-black mb-6">Projects</h2>

        {/* Dog Cookie Dispenser */}
        <div className="w-full border-4 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-start md:items-center">
          {/* Left Side */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-3xl text-black font-medium mb-4">
              Dog Cookie Dispenser
            </h3>
            <p className="text-lg text-black">
              Designed a dog cookie dispenser.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] group rounded-xl overflow-hidden bg-white">
              <img
                src="/cookieDispenserFront.png"
                alt="Dog Cookie Dispenser"
                className="w-full h-full object-contain rounded-lg transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/cookieDispenserTop.png"
                alt="Dog Cookie Dispenser Hover"
                className="absolute top-0 left-0 w-full h-full object-contain rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Dragon Head */}
        <div className="w-full border-4 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-start md:items-center">
          {/* Left Side */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-3xl text-black font-medium mb-4">
              Dragon Head
            </h3>
            <p className="text-lg text-black">
              Designed a dragon head inspired by Toothless from <span className="italic">How to Train Your Dragon</span>.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] group rounded-xl overflow-hidden bg-white">
              <img
                src="/dragonHeadFront.png"
                alt="Dragon Head"
                className="w-full h-full object-contain rounded-lg transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/dragonHeadTop.png"
                alt="Dragon Head Hover"
                className="absolute top-0 left-0 w-full h-full object-contain rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
