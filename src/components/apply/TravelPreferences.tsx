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

const TravelPreferences = () => {
  const dispatch = useAppDispatch();
  const { departureDate, returnDate, nationality, email, phone } = useAppSelector(
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
      <h2 className="text-2xl font-bold mb-4">Travel Preferences</h2>
      <input
        type="date"
        defaultValue={departureDate}
        {...register("departureDate")}
        className="w-full mb-4 p-2 border"
      />
      {errors.departureDate && (
        <p className="text-red-500">{errors.departureDate.message as ReactNode}</p>
      )}
      <input
        type="date"
        defaultValue={returnDate}
        {...register("returnDate")}
        className="w-full mb-4 p-2 border"
      />
      {errors.returnDate && (
        <p className="text-red-500">{errors.returnDate.message as ReactNode}</p>
      )}
      <input
        type="text"
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
        placeholder="Email"
        defaultValue={email}
        {...register("email")}
        className="w-full mb-4 p-2 border"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        type="tel"
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

export default TravelPreferences;
