import Image from "next/image";
import { Baskervville_SC } from 'next/font/google';
import { Inconsolata } from 'next/font/google';

const baskervvilleSC = Baskervville_SC({ subsets: ['latin'], weight: '400' });
const inconsolata = Inconsolata({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      {/* Intro Section */}
<div className="relative flex h-3/4 flex-col items-center justify-center bg-blue-200 font-sans p-8 overflow-hidden">
  {/* Left Spinning Gear */}
  <img
    src="/gear.png"
    alt="Gear"
    className="hidden lg:block absolute left-0 top-1/2 w-100 h-100 -translate-x-1/3 -translate-y-1/2 opacity-50 animate-spin-slow"
  />

  {/* Right Spinning Gear */}
  <img
    src="/gear.png"
    alt="Gear"
    className="hidden lg:block absolute right-0 top-1/2 w-100 h-100 translate-x-1/3 -translate-y-1/2 opacity-40 animate-spin-slow-reverse"
  />
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
          I'm a first-year Mechanical Engineering student at the <a href="https://www.ubc.ca" className="text-blue-600 underline hover:text-blue-800">University of British Columbia</a>, focusing in mechatronics. I enjoy hands-on projects, robotics, and creative engineering design.
        </p>

        <div className="flex gap-4">
          <a
            href="/resume2026.pdf"
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
            <span className="text-sm text-gray-600 mb-4 block">
              Feb. 2021 - April 2021
            </span>
            <p className="text-lg text-black">
              As a Grade 8 project, I designed a dog cookie dispenser to test whether my Great Dane, Finnegan, could distinguish between two similar sounds. Built around a random timer, the dispenser would play the tones throughout the day. One sound resulted in absolutely nothing; however, the other would play a few seconds before a cookie was dispensed. I was curious whether my dog would learn to ignore one sound and get excited about the other. Unfortunately, the experiment took a turn and resulted in sick-of-cookies dog who decided he didn't like them anymore, so I never reaching a conclusion about his sound-association abilities.
              </p>
              <p className="text-lg text-black mt-4">
              This project involved a plank on a rack and pinion system. A motor would drive the plank forward, pushing a dog cookie out of the tower, until it hit a button signaling it was at the end of its path. It would then reverse until it hit a different button which would tell the Arduino Nano that it had returned to its original position, stopping the motor. The dispenser also featured a small speaker to play the tones, along with a couple of LEDs to indicate which sound was playing. The entire shell of the device was designed in 123D Design and 3D printed, while the hardware was coded in C on an Arduino Nano.
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
            <span className="text-sm text-gray-600 mb-4 block">
              Sept. 2023 - Jan. 2024
            </span>
            <p className="text-lg text-black">
              This project was inspired by Toothless from <span className="italic">How to Train Your Dragon</span>. As a kid, I watched the movie and was frustrated that I couldn't have my own pet dragon. When I was 15, I decided a robot dragon would have to suffice. I created this Toothless head with the ability to shake its ears, move its LED eyes, and "breathe fire" with the help of an LED, all in accordance to where someone was positioned in front of it. Two proximity sensors detected whether someone had approached Toothless from the side or the front. If from the side, Toothless would become excited, moving his ears up and down a few times and looking towards whichever side the person was on. However, if he sensed that someone was directly in front of him, he would become scared: his ears would quiver non-stop and he would shoot plasma fire.
            </p>
            <p className="text-lg text-black mt-4">
              The shell of the dragon head was created using 123D Design and 3D printing. Inside of it, a singular servo was connected with a wire to the two ears. When the servo moved back and forth, the ears were pulled to create the wiggling effect. Each eye was composed of three different green LEDs. At a given time, one LED from each eye would be lit, changing depending on the direction they were meant to be looking. The "fire" light was positioned near his mouth, shining blue to emulate the blue plasma that Toothless shoots in the movie. Through an Aruduino MEGA2560 and an Arduino Nano, these components were hooked up to the transmitter and reciever sensors. If an object was detected in front of them, they would send a logic signal to the circuit boards, signalling the detection. The boards, programmed using C, would then respond by causing the dragon to react in relation to where that object was positioned.
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

      {/* Contact Section */}
<div className="w-full flex justify-center bg-white pb-12">
<div id="contact" 
className="w-full max-w-5xl bg-white px-8 flex flex-col items-center">
  <h2 className="text-3xl font-medium text-black mb-4">Contact Me</h2>
  
  <form 
    action="https://formspree.io/f/xvzbqldp" 
    method="POST" 
    className="w-full flex flex-col gap-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Name"
      required
      className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
    />
    
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
    />
    
    <textarea
      name="message"
      placeholder="Message"
      required
      rows={6}
      className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
    />
    
    <button
      type="submit"
      className="px-6 py-3 bg-blue-200 text-black rounded-lg hover:bg-blue-300 transition"
    >
      Send Message
    </button>
  </form>
</div>
</div>
    </>
  );
}
