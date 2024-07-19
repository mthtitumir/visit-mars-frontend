import Apply from "@/components/apply/Apply";

const ApplyForMissionMars = () => {
  return (
    <>
      <div className="relative h-screen">
        {/* background video  */}
        <video
          src="https://res.cloudinary.com/dbbtzirgj/video/upload/v1721235440/8474585-hd_1920_1080_30fps_ox4qls.mp4"
          loop
          controls={false}
          autoPlay
          muted
          className="w-full h-full object-cover"
        />
        {/* main form div  */}
        <div className="w-full absolute inset-0 bg-[#0A192F] bg-opacity-70 flex items-center justify-center">
          <div className="w-[98vw] md:w-1/2 p-8 rounded border-main h-[98vh] md:h-auto md:max-h-[95vh] overflow-auto">
            <Apply />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyForMissionMars;
