const ApplyForMissionMars = () => {
  return (
    <>
      <div className="relative h-screen">
        <video
          src="https://res.cloudinary.com/dbbtzirgj/video/upload/v1721235440/8474585-hd_1920_1080_30fps_ox4qls.mp4"
          loop
          controls={false}
          autoPlay
          muted
          className="w-full h-full object-cover"
        />
        <div className="px-3 absolute inset-0 bg-[#0A192F] bg-opacity-70 flex items-center justify-center rounded-lg">
          <div className="px-8 py-16 rounded-md border border-amber-500 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Journey to Mars</h1>
            <div className="text-xl my-4 text-justify">
              <p className="">
                Join the pioneering mission to explore the Red Planet.
              </p>
              <p> Apply now to become part of this extraordinary adventure.</p>
            </div>
              <button
                className="border border-amber-500 py-2 px-4 rounded-md hover:bg-amber-600 text-amber-500 hover:text-white font-bold text-xl transition duration-300"
              >
                Apply for Mission Mars
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyForMissionMars