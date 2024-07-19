import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { prevStep, resetForm, updateApplyForm } from "@/redux/features/apply/applySlice";
import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { healthAndSafetySchema } from "@/schemas";
import FormHeading from "./FormHeading";

const HealthAndSafety = () => {
  const dispatch = useAppDispatch();
  const {
    emergencyPhone,
    emergencyEmail,
    medicalConditions,
    healthDeclaration
  } = useAppSelector((state) => state.apply.form);
  const step = useAppSelector((state) => state.apply.step);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(healthAndSafetySchema),
  });

  const onSubmit = (data: any) => {
    console.log({ data });
    dispatch(updateApplyForm(data));
    toast.success("Applied");
    dispatch(resetForm());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
      <FormHeading text="Health & Safety"/>
      <div className="form-section-div">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Emergency Phone Number</label>
          <input
            type="text"
            placeholder="Emergency Phone Number"
            defaultValue={emergencyPhone}
            {...register("emergencyPhone")}
          />
          {errors.emergencyPhone && (
            <p className="text-red-500">
              {errors.emergencyPhone.message as ReactNode}
            </p>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Emergency Email</label>
          <input
            type="text"
            placeholder="Emergency Email"
            defaultValue={emergencyEmail}
            {...register("emergencyEmail")}
          />
          {errors.emergencyEmail && (
            <p className="text-red-500">
              {errors.emergencyEmail.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="form-section-div">
        <div className="w-full">
          <label htmlFor="">Medical Conditions</label>
          <textarea
            cols={4}
            rows={2}
            placeholder="Write any medical conditions or issues if have"
            defaultValue={medicalConditions}
            {...register("medicalConditions")}
          />
          {errors.medicalConditions && (
            <p className="text-red-500">
              {errors.medicalConditions.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="form-section-div">
        <div className="w-full">
          <input type="checkbox" {...register("healthDeclaration")} defaultChecked={healthDeclaration} name="" id="" placeholder="Write any medical conditions or issues if have" />
          {errors.medicalConditions && (
            <p className="text-red-500">
              {errors.medicalConditions.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      {/* <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Next
      </button> */}
      <div className="flex justify-between gap-8 w-full">
        <Button
          onClick={handleBack}
          disabled={step - 1 === 0}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Back
        </Button>
        <Button
          // onClick={handleNext}
          type="submit"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default HealthAndSafety;
