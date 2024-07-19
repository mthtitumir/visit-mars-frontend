import React, { ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { nextStep, prevStep, updateApplyForm } from "@/redux/features/apply/applySlice";
import { Button } from "@material-tailwind/react";

const schema = z.object({
  departureDate: z.string().nonempty("Departure date is required"),
  returnDate: z.string().nonempty("Return date is required"),
  specialRequests: z.string().nonempty("Special requests is required"),
  spaceHotel: z.string().optional(),
  martianBase: z.string().optional(),
});

const TravelPreferences = () => {
  const dispatch = useAppDispatch();
  const {
    departureDate,
    returnDate,
    specialRequests,
    spaceHotel,
    martianBase,
  } = useAppSelector((state) => state.apply.form);
  const step = useAppSelector((state) => state.apply.step);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
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
      <h2 className="text-2xl font-bold mb-4">Travel Preferences</h2>
      <div className="flex gap-3 items-center">
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
      <div className="flex gap-3 items-center">
        <div className="w-full lg:w-1/2">
          <label htmlFor="">Space Hotel</label>
          <select defaultValue={spaceHotel}>
            <option value="ABC Hotel">ABC Hotel</option>
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
          <select defaultValue={martianBase}>
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
      <div className="flex gap-3 items-center">
        <div className="w-full">
          <label htmlFor="">Special Requests / Notes</label>
          <textarea
            cols={4}
            rows={1}
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

export default TravelPreferences;
