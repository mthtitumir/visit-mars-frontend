"use client";
import React from "react";
import PersonalInformation from "./PersonalInfo";
import TravelPreferences from "./TravelPreferences";
import HealthAndSafety from "./HealthAndSafety";
import { useAppSelector } from "@/redux/hook";
import StepperComponent from "./StepperComponent";
import RecheckApplication from "./RecheckApplication";

const Apply = () => {
  const step = useAppSelector((state) => state.apply.step);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <TravelPreferences />;
      case 3:
        return <HealthAndSafety />;
      case 4:
        return <RecheckApplication />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="">
      {step !== 4 && <StepperComponent activeStep={step - 1} />}
      <div className="">{renderStep()}</div>
    </div>
  );
};

export default Apply;
