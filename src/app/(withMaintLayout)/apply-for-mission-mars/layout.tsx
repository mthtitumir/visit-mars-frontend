import { TChildrenProps } from "@/types";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Apply for Mission Mars",
  description: "Apply now to become part of this extraordinary adventure.!",
};
const ApplyForMissionMarsLayout = ({ children }: TChildrenProps) => {
  return <div>{children}</div>;
};

export default ApplyForMissionMarsLayout;
