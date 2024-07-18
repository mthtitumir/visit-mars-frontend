import React from "react";
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
  const { fullName, dateOfBirth, nationality, email, phone } = useAppSelector(
    (state) => state.apply.form
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(updateApplyForm(data));
    dispatch(nextStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        defaultValue={fullName}
        {...register("fullName")}
        className="w-full mb-4 p-2 border"
      />
      {errors.fullName && (
        <p className="text-red-500">{errors.fullName.message}</p>
      )}
      <input
        type="date"
        name="dateOfBirth"
        defaultValue={dateOfBirth}
        {...register("dateOfBirth")}
        className="w-full mb-4 p-2 border"
      />
      {errors.dateOfBirth && (
        <p className="text-red-500">{errors.dateOfBirth.message}</p>
      )}
      <input
        type="text"
        name="nationality"
        placeholder="Nationality"
        defaultValue={nationality}
        {...register("nationality")}
        className="w-full mb-4 p-2 border"
      />
      {errors.nationality && (
        <p className="text-red-500">{errors.nationality.message}</p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        defaultValue={email}
        {...register("email")}
        className="w-full mb-4 p-2 border"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        defaultValue={phone}
        {...register("phone")}
        className="w-full mb-4 p-2 border"
      />
      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Next
      </button>
    </form>
  );
};

export default PersonalInformation;
