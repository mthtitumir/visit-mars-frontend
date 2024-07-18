import Apply from "@/components/apply/Apply"

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
        <div className="absolute inset-0 bg-[#0A192F] bg-opacity-70 flex items-center justify-center">
          <div className="p-8 rounded-md border border-amber-500 flex flex-col items-center justify-center max-h-[95vh] overflow-auto">
            <Apply />
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyForMissionMars