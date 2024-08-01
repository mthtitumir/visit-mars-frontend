import { useAppDispatch, useAppSelector } from "@/redux/hook";
import FormHeading from "./FormHeading";
import BackButton from "./BackButton";
import { Button } from "@material-tailwind/react";
import { resetForm } from "@/redux/features/apply/applySlice";
import toast from "react-hot-toast";
import { useState } from "react";
import { Dialogue } from "../shared/Dialogue";

const RecheckApplication = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.apply.form);
  console.log({ data });
  const handleOpen = () => setOpen(!open);
  const handleConfirmApplication = async () => {
    handleOpen();
    try {
      const response = await fetch(
        "http://localhost:1200/api/v1/applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Application submitted successfully!");
        dispatch(resetForm());
      } else {
        toast.error("Failed to submit the application.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the application.");
      console.error("Error submitting application:", error);
    }
  };
  const texts = (
    <div className="p-4 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-amber-500">
        Confirm Your Application
      </h2>
      <p className="mb-4">
        Are you sure you want to apply for this mission to Mars? This decision
        is final, and your application will be submitted for review. Please
        ensure that all information provided is accurate and complete.
      </p>
      <p className="font-semibold text-amber-500">Note:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          This application may involve significant preparation and commitment.
        </li>
        <li>Once submitted, you cannot make changes to your application.</li>
        <li>Make sure you meet all the requirements for the mission.</li>
      </ul>
      <p className="text-amber-500">Do you wish to proceed?</p>
    </div>
  );
  const submitButton = (
    <Button
      className="border-main text-amber-500"
      onClick={handleConfirmApplication}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <span>Confirm</span>
    </Button>
  );
  return (
    <>
      <FormHeading text="Please recheck your information!" />
      <div className="flex flex-col gap-5 mb-5 text-amber-500">
        <div className="flex gap-5">
          <h1>Name: {data.fullName}</h1>
          <h1>Date of Birth: {data.dateOfBirth}</h1>
        </div>
        <div className="flex gap-5">
          <h1>Email: {data.email}</h1>
          <h1>Phone: {data.phone}</h1>
        </div>
        <div className="flex gap-5">
          <h1>Passport No.: {data.passportNo}</h1>
          <h1>Nationality: {data.nationality}</h1>
        </div>
        <h1>Detailed address: {data.detailedAddress}</h1>
        <div className="flex gap-5">
          <h1>Departure Date: {data.departureDate}</h1>
          <h1>Return Date: {data.returnDate}</h1>
        </div>
        <div className="flex gap-5">
          <h1>Space Hotel: {data.spaceHotel}</h1>
          <h1>Martian Base: {data.martianBase}</h1>
        </div>
        <h1>Special Request: {data.specialRequests}</h1>
        <h1>Health Declaration: {data.healthDeclaration ? "Yes" : "NO"}</h1>
        <div className="flex gap-5">
          <h1>Emergency email: {data.emergencyEmail}</h1>
          <h1>Emergency phone: {data.emergencyPhone}</h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <BackButton />
        <div className="flex justify-between items-center gap-3">
          <Button
            onClick={() => dispatch(resetForm())}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="border-main text-amber-500 "
          >
            Cancel
          </Button>
          <Button
            onClick={handleOpen}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="border-main text-amber-500 "
          >
            Confirm Application
          </Button>
        </div>
      </div>
      <Dialogue
        handleOpen={handleOpen}
        open={open}
        bodyText={texts}
        submit={submitButton}
      />
    </>
  );
};

export default RecheckApplication;
