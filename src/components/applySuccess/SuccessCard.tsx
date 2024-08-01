"use client";

import Image from "next/image";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "@material-tailwind/react";

const SuccessCard = ({ name }: { name: string }) => {
  const cardRef = useRef(null);
  const downloadCardAsImage = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "mission-mars.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <>
      <div className="relative h-screen bg-inherit">
        <div className="w-full absolute inset-0 bg-[#0A192F] flex items-center justify-center">
          <div className="w-[98vw] md:w-1/2 rounded border-main h-[98vh] md:h-auto md:max-h-[95vh]">
            <div
              className="flex justify-center items-center p-6 bg-[#0A192F]"
              ref={cardRef}
            >
              <div className="max-w-md w-full rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://res.cloudinary.com/dbbtzirgj/image/upload/v1722494921/astronaut_tewt9g.jpg"
                    alt="Astronaut Avatar"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-bold text-amber-500 mb-4">
                  Welcome to the Mission, {name}!
                </h2>
                <p className="text-white mb-4">
                  Congratulations on successfully applying for the Mars mission.
                  Your application is now under review, and we will get back to
                  you soon. Prepare for an incredible journey!
                </p>
                <p className="text-gray-400">
                  If you have any questions or need further assistance, please
                  contact us at{" "}
                  <a
                    href="mailto:mthtitumir1@gmail.com"
                    className="text-amber-500"
                  >
                    mthtitumir1@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex justify-end p-3">
              <Button
                className="border-main text-amber-500 bg-transparent rounded mt-3 text-right"
                onClick={downloadCardAsImage}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <span>Download Card</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessCard;
