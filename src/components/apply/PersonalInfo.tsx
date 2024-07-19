import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { nextStep, prevStep, updateApplyForm } from "@/redux/features/apply/applySlice";
import { Button } from "@material-tailwind/react";

const schema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  dateOfBirth: z.string().nonempty("Date of Birth is required"),
  nationality: z.string().nonempty("Nationality is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Phone number is required"),
});

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
  const step = useAppSelector((state) => state.apply.step);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log({ data });
    dispatch(updateApplyForm(data));
    dispatch(nextStep());
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <div className="flex flex-col md:flex-row gap-3 items-center">
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
      <div className="flex flex-col md:flex-row gap-3 items-center">
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
      <div className="flex flex-col md:flex-row gap-3 items-center">
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
      <div className="flex flex-col md:flex-row gap-3 items-center">
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
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
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
          disabled={step - 1 === 2}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Nextt
        </Button>
      </div>
    </form>
  );
};

export default PersonalInformation;
