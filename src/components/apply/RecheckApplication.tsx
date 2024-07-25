import { useAppDispatch, useAppSelector } from "@/redux/hook";
import FormHeading from "./FormHeading";
import BackButton from "./BackButton";
import { Button } from "@material-tailwind/react";
import { resetForm } from "@/redux/features/apply/applySlice";
import toast from "react-hot-toast";

const RecheckApplication = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.apply.form);
  console.log({ data });
  const handleConfirmApplication = () => {
    toast.success(data.fullName);
  };

  return (
    <>
      <FormHeading text="Please recheck your information!" />
      <div className="flex flex-col gap-5 mb-5">
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
            onClick={handleConfirmApplication}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="border-main text-amber-500 "
          >
            Confirm Application
          </Button>
        </div>
      </div>
    </>
  );
};

export default RecheckApplication;
