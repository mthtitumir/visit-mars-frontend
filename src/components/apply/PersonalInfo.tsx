import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { nextStep, updateApplyForm } from "@/redux/features/apply/applySlice";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <div className="flex gap-3 items-center">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            defaultValue={fullName}
            {...register("fullName")}
            className="w-full mb-4 p-2 text-amber-500 focus:outline-none border-main bg-transparent rounded-md"
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
            className="w-full mb-4 p-2 text-amber-500 focus:outline-none border-main bg-transparent rounded-md"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message as ReactNode}</p>
          )}
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            defaultValue={phone}
            {...register("phone")}
            className="w-full mb-4 p-2 text-amber-500 focus:outline-none border-main bg-transparent rounded-md"
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
            className="w-full mb-4 p-2 text-amber-500 focus:outline-none border-main bg-transparent rounded-md"
          />
          {errors.passportNo && (
            <p className="text-red-500">
              {errors.passportNo.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Date of Birth</label>
          <input
            type="date"
            defaultValue={dateOfBirth}
            {...register("dateOfBirth")}
            className="w-full mb-4 p-2 focus:outline-none border-main bg-transparent rounded-md"
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
            className="w-full mb-4 p-2 focus:outline-none border-main bg-transparent rounded-md"
          />
          {errors.nationality && (
            <p className="text-red-500">
              {errors.nationality.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-3 items-center">
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
      {/* <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Next
      </button> */}
    </form>
  );
};

export default PersonalInformation;
