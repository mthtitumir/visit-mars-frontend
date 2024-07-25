import React, { ReactNode } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  nextStep,
  prevStep,
  updateApplyForm,
} from "@/redux/features/apply/applySlice";
import { Button } from "@material-tailwind/react";
import { travelPreferencesSchema } from "@/schemas";
import FormHeading from "./FormHeading";
import { icons } from "@/icons";
import BackButton from "./BackButton";

const TravelPreferences = () => {
  const dispatch = useAppDispatch();
  const {
    departureDate,
    returnDate,
    specialRequests,
    spaceHotel,
    martianBase,
  } = useAppSelector((state) => state.apply.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(travelPreferencesSchema),
  });

  const onSubmit = (data: FieldValues) => {
    dispatch(updateApplyForm(data));
    dispatch(nextStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
      <FormHeading text="Travel Preferences" />
      <div className="form-section-div">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Departure Date</label>
          <input
            type="date"
            defaultValue={departureDate}
            {...register("departureDate")}
            className="w-full mb-4 p-2 border"
          />
          {errors.departureDate && (
            <p className="text-red-500">
              {errors.departureDate.message as ReactNode}
            </p>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Return Date</label>
          <input
            type="date"
            defaultValue={returnDate}
            {...register("returnDate")}
            className="w-full mb-4 p-2 border"
          />
          {errors.returnDate && (
            <p className="text-red-500">
              {errors.returnDate.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="form-section-div">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Space Hotel</label>
          <select defaultValue={spaceHotel} {...register("spaceHotel")}>
            <option disabled value="ABC Hotel">ABC Hotel</option>
            <option value="XYZ Hotel">XYZ Hotel</option>
            <option value="Mars Nigga">Mars Niggas</option>
            <option value="Mars Heaven">Mars Heaven</option>
            <option value="Mars Monday">Mars Monday</option>
          </select>
          {errors.spaceHotel && (
            <p className="text-red-500">
              {errors.spaceHotel.message as ReactNode}
            </p>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Martian Base</label>
          <select defaultValue={martianBase} {...register("martianBase")}>
            <option value="Base 71">Base 71</option>
            <option value="Base Robin">Base Robin</option>
            <option value="Base CN">Base CN</option>
          </select>
          {errors.martianBase && (
            <p className="text-red-500">
              {errors.martianBase.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="form-section-div">
        <div className="w-full">
          <label htmlFor="">Special Requests / Notes</label>
          <textarea
            cols={4}
            rows={2}
            placeholder="Special Requests / Notes (if have)"
            defaultValue={specialRequests}
            {...register("specialRequests")}
          />
          {errors.specialRequests && (
            <p className="text-red-500">
              {errors.specialRequests.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between gap-8 w-full">
        <BackButton />
        <Button
          type="submit"
          // onClick={() => dispatch(nextStep())}
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

export default TravelPreferences;
