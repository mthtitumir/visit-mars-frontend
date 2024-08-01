import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  nextStep,
  prevStep,
  resetForm,
  updateApplyForm,
} from "@/redux/features/apply/applySlice";
import { Button } from "@material-tailwind/react";
import { healthAndSafetySchema } from "@/schemas";
import FormHeading from "./FormHeading";
import { icons } from "@/icons";
import BackButton from "./BackButton";
import Link from "next/link";

const HealthAndSafety = () => {
  const dispatch = useAppDispatch();
  const {
    emergencyPhone,
    emergencyEmail,
    medicalConditions,
    healthDeclaration,
  } = useAppSelector((state) => state.apply.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(healthAndSafetySchema),
  });

  const onSubmit = (data: any) => {
    dispatch(updateApplyForm(data));
    dispatch(nextStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
      <FormHeading text="Health & Safety" />
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
        <div className="flex gap-3">
          <input
            type="checkbox"
            {...register("healthDeclaration")}
            defaultChecked={healthDeclaration}
            className="w-4"
          />
          <h1>Accept all <Link href="#" className="text-amber-500">terms & conditions</Link></h1>
        </div>
        {errors.medicalConditions && (
          <p className="text-red-500">
            {errors.medicalConditions.message as ReactNode}
          </p>
        )}
      </div>
      <div className="flex justify-between gap-8 w-full">
        <BackButton />
        <Button
          type="submit"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="border-main text-amber-500 "
        >
          <icons.stepper.arrowRight size={20} />
        </Button>
      </div>
    </form>
  );
};

export default HealthAndSafety;
