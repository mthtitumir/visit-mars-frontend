import { ReactNode } from "react"

export type TChildrenProps = {
    children: ReactNode
}

export type TForm = {
    fullName: string;
    email: string;
    phone: string;
    passportNo: string;
    dateOfBirth: string;
    nationality: string;
    detailedAddress: string;
    departureDate: string;
    returnDate: string;
    accommodationPreference: string,
    specialRequests: string,
    healthDeclaration: boolean,
    emergencyContactInformation: string,
    medicalConditions: string;
}