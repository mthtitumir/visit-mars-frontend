"use client";
import React from "react";
import PersonalInformation from "./PersonalInfo";
import TravelPreferences from "./TravelPreferences";
import HealthAndSafety from "./HealthAndSafety";
import { useAppSelector } from "@/redux/hook";
import ApplyForm from "./ApplyForm";
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
      <ApplyForm activeStep={step - 1} />
      <div className=" shadow-md rounded-lg ">
        {renderStep()}
      </div>
      <div className="flex justify-between">
        <Button color="gray" onClick={handleBack} disabled={step-1 === 0}>
          Back
        </Button>
        <Button
          color="blue"
          onClick={handleNext}
          disabled={step-1 === 2}
        >
          Nextt
        </Button>
      </div>
    </div>
  );
};

export default Apply;
