import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    form: {
        // personal info 
        fullName: '',
        email: '',
        phone: '',
        passportNo: "",
        dateOfBirth: '',
        nationality: '',
        detailedAddress: '',
        // travel preferences 
        departureDate: '',
        returnDate: '',
        spaceHotel: '',
        martianBase: '',
        specialRequests: '',
        // health and safety 
        healthDeclaration: false,
        emergencyPhone: '',
        emergencyEmail: '',
        medicalConditions: '',
    },
};
const applySlice = createSlice({
    name: "apply",
    initialState,
    reducers: {
        nextStep(state) {
            state.step += 1;
        },
        prevStep(state) {
            state.step -= 1;
        },
        updateApplyForm(state, action) {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        resetForm(state) {
            state.step = 1;
            state.form = initialState.form;
        },
    },
})

export const { nextStep, prevStep, updateApplyForm, resetForm } = applySlice.actions;

export default applySlice.reducer;