import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    form: {
        fullName: '',
        email: '',
        phone: '',
        passportNo: "",
        dateOfBirth: '',
        nationality: '',
        detailedAddress: '',
        departureDate: '',
        returnDate: '',
        spaceHotel: '',
        martianBase: '',
        specialRequests: '',
        healthDeclaration: false,
        emergencyContactInformation: '',
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

export const {nextStep, prevStep, updateApplyForm, resetForm} = applySlice.actions;

export default applySlice.reducer;