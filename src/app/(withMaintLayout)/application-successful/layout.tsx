import { TChildrenProps } from "@/types";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Successful Application for Mission Mars",
  description: "Welcome to the extraordinary adventure!",
};
const ApplicationSuccessfulLayout = ({ children }: TChildrenProps) => {
  return <div>{children}</div>;
};

export default ApplicationSuccessfulLayout;
