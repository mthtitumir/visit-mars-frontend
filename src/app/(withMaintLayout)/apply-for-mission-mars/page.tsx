import Apply from "@/components/apply/Apply";

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
        <div className="w-full absolute inset-0 bg-[#0A192F] bg-opacity-70 flex items-center justify-center">
          <div className="p-8 rounded border-main max-h-[98vh] m-1 overflow-auto">
            <Apply />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyForMissionMars;
