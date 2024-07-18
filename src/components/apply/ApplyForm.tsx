"use client"
import React from 'react';
import { Step, Stepper } from '@material-tailwind/react';

const steps = ['Personal Information', 'Travel Preferences', 'Health and Safety'];

const ApplyForm = ({ activeStep }) => {

  return (
    <div className=" mx-auto py-4">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default ApplyForm;
