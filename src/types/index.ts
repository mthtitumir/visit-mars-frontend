import { ReactNode } from "react"

export type TChildrenProps = {
    children: ReactNode
}

export type TForm = {
    fullName: string;
    email: string;
    phone: string;
    passportNo: string;
    dateOfBirth: Date | string;
    nationality: string;
    detailedAddress: string;
    departureDate: string;
    returnDate: string;
    spaceHotel: string,
    martianBase: string,
    specialRequests: string,
    healthDeclaration: boolean,
    emergencyPhone: string,
    emergencyEmail: string,
    medicalConditions: string;
}