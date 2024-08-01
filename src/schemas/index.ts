import { z } from "zod";

export const personalInfoSchema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    detailedAddress: z.string().min(1, "Detailed address is required"),
    passportNo: z.string().min(1, "Passport no is required"),
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    nationality: z.string().min(1, "Nationality is required"),
    email: z.string().email('Invalid email address').regex(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid email format'
    ).min(1, "Email is required!"),
    phone: z.string().min(1, "Phone number is required"),
});

export const travelPreferencesSchema = z.object({
    departureDate: z.string().min(1, "Departure date is required"),
    returnDate: z.string().min(1, "Return date is required"),
    specialRequests: z.string().min(1, "Special requests is required"),
    spaceHotel: z.string().optional(),
    martianBase: z.string().optional(),
});

export const healthAndSafetySchema = z.object({
    healthDeclaration: z.boolean(),
    medicalConditions: z.string().optional(),
    emergencyEmail: z.string().email('Invalid email address').regex(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid email format'
    ).min(1, "Emergency email is required!"),
    emergencyPhone: z.string().min(1, "Emergency phone number is required"),
});