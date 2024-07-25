import { prevStep } from "@/redux/features/apply/applySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button } from "@material-tailwind/react";
import { icons } from "@/icons";

const BackButton = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.apply.step);
  return (
    <Button
      onClick={() => dispatch(prevStep())}
      disabled={step === 1}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className="border-main text-amber-500"
    >
      <icons.stepper.arrowLeft size={16} />
    </Button>
  );
};

export default BackButton;
