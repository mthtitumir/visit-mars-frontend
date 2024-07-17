// export default function Home() {
//   return (
//     <>
//       <div className="relative h-screen">
//         <video
//           src="https://res.cloudinary.com/dbbtzirgj/video/upload/v1721226109/spaceship_and_planet_o4jpk3.mp4"
//           loop
//           controls={false}
//           autoPlay
//           muted
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-[#0A192F] bg-opacity-60 flex items-center justify-center">
//           <div className="w-24 h-24 rounded-full border border-amber-500 flex items-center justify-center cursor-pointer text-white">
//             Hello
//           </div>
//         </div>
//       </div>
//     </>
//   );

import Link from "next/link";

// }
export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <video
          src="https://res.cloudinary.com/dbbtzirgj/video/upload/v1721226109/spaceship_and_planet_o4jpk3.mp4"
          loop
          controls={false}
          autoPlay
          muted
          className="w-full h-full object-cover"
        />
        <div className="px-3 absolute inset-0 bg-[#0A192F] bg-opacity-60 flex items-center justify-center rounded-lg">
          <div className="px-8 py-16 rounded-md border border-amber-500 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">Journey to Mars</h1>
            <div className="text-xl my-4 text-justify">
              <p className="">
                Join the pioneering mission to explore the Red Planet.
              </p>
              <p> Apply now to become part of this extraordinary adventure.</p>
            </div>
            <Link href="/apply-for-mission-mars">
              <button
                // onClick={handleClick}
                className="border border-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 text-amber-500 hover:text-white font-bold text-xl transition duration-300"
              >
                Apply for Mission Mars
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// transform translate-y-24
