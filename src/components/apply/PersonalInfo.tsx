import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { nextStep, updateApplyForm } from "@/redux/features/apply/applySlice";
import { Button } from "@material-tailwind/react";
import { personalInfoSchema } from "@/schemas";
import FormHeading from "./FormHeading";
import { icons } from "@/icons";
import BackButton from "./BackButton";
import "react-day-picker/style.css";

const PersonalInformation = () => {
  const dispatch = useAppDispatch();
  const {
    fullName,
    dateOfBirth,
    nationality,
    email,
    phone,
    passportNo,
    detailedAddress,
  } = useAppSelector((state) => state.apply.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(updateApplyForm(data));
    dispatch(nextStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
      <FormHeading text="Personal Information" />
      <div className="form-section-div">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            defaultValue={fullName}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-500">
              {errors.fullName.message as ReactNode}
            </p>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            defaultValue={email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message as ReactNode}</p>
          )}
        </div>
      </div>
      <div className="form-section-div">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            defaultValue={phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message as ReactNode}</p>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Passport No.</label>
          <input
            type="text"
            placeholder="Passport No."
            defaultValue={passportNo}
            {...register("passportNo")}
          />
          {errors.passportNo && (
            <p className="text-red-500">
              {errors.passportNo.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="form-section-div">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Date of Birth</label>
          <input
            type="date"
            defaultValue={dateOfBirth}
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500">
              {errors.dateOfBirth.message as ReactNode}
            </p>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Nationality</label>
          <input
            type="text"
            placeholder="Nationality"
            defaultValue={nationality}
            {...register("nationality")}
          />
          {errors.nationality && (
            <p className="text-red-500">
              {errors.nationality.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="form-section-div">
        <div className="w-full">
          <label htmlFor="">Detailed Address</label>
          <textarea
            cols={4}
            rows={1}
            placeholder="Detailed Address"
            defaultValue={detailedAddress}
            {...register("detailedAddress")}
          />
          {errors.detailedAddress && (
            <p className="text-red-500">
              {errors.detailedAddress.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between w-full">
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

export default PersonalInformation;
