"use client";
import React from "react";
import { Step, Stepper } from "@material-tailwind/react";
import { icons } from "@/icons";

const steps = [
  {
    label: "Personal Information",
    icon: icons.stepper.user,
  },
  {
    label: "Travel Preferences",
    icon: icons.stepper.plane,
  },
  {
    label: "Health and Safety",
    icon: icons.stepper.health,
  },
];
const StepperComponent = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="w-full mx-auto py-4">
      <Stepper
        activeStep={activeStep}
        placeholder={undefined}
        onPointerEnterCapture
        onPointerLeaveCapture
        lineClassName="bg-amber-500 h-[1px] z-10"
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            placeholder={undefined}
            onPointerEnterCapture
            onPointerLeaveCapture
            className="!bg-gray-800"
            // completedClassName="text-white"
            activeClassName="border-main"
          >
            <step.icon className="text-amber-500" />
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperComponent;
