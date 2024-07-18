import {ApplyForm} from "@/components/apply/ApplyForm"

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
            <ApplyForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyForMissionMars