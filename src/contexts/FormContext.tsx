// Context, Reducer, Provider, Hook
import { createContext, useContext, useReducer } from "react";

const initialData = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}
// Context
const FormContext = createContext(undefined);

//Reducer
enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEMail,
    setGithub
}
const FormReducer = (state, action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEMail:
            return { ...state, email: action.paylound };
        case FormActions.setGithub:
            return { ...state, Github: action.payloand };
        default:
            return state;
    }

}

//Provider
const FormProvider = ({ childrean }) => {
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {childrean}
        </FormContext.Provider>
    )
}
