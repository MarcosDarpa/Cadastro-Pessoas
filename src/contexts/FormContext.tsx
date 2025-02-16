// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (Action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}
// Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEMail,
    setGithub
}
const FormReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEMail:
            return { ...state, email: action.payload };
        case FormActions.setGithub:
            return { ...state, Github: action.payload };
        default:
            return state;
    }

}

//Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Context Hook
export const useForm = () => {
    const context =useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usada dentro do FormProvider')
    }
    return context;
}