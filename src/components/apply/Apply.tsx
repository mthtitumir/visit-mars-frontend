"use client";
import React from "react";
import PersonalInformation from "./PersonalInfo";
import TravelPreferences from "./TravelPreferences";
import HealthAndSafety from "./HealthAndSafety";
import { useAppSelector } from "@/redux/hook";
import StepperComponent from "./StepperComponent";
import { Button } from "@material-tailwind/react";
import { useAppDispatch } from "@/redux/hook";
import { nextStep, prevStep } from "@/redux/features/apply/applySlice";

const Apply = () => {
  const step = useAppSelector((state) => state.apply.step);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <TravelPreferences />;
      case 3:
        return <HealthAndSafety />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center ">
      <StepperComponent activeStep={step - 1} />
      <div className=" shadow-md rounded-lg ">
        {renderStep()}
      </div>
      <div className="flex justify-between gap-8 w-full">
        <Button onClick={handleBack} disabled={step - 1 === 0} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={step - 1 === 2} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Nextt
        </Button>
      </div>
    </div>
  );
};

export default Apply;
