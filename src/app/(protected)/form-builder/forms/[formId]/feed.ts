interface IField {
  element: "input" | "select" | "textarea";
  label: string;
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "tel"
    | "date"
    | "time"
    | "select"
    | "textarea";
  options?: string[];
  fieldValidation?: {
    required: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
  };
}

interface IFormStep {
  stepId: number;
  stepName: string;
  stepDescription: string;
  stepFields: IField[];
}
interface IMultiStepFormObjData {
  formId: string;
  formName: string;
  formType: "multiStepForm" | "singleStepForm";
  formSteps: IFormStep[];
}

const multiStepFormObjData = {
  formId: "609c6e9b8f8e4e001f3e5e1a",
  formName: "Aura Backend Couse Form",
  formType: "multiStepForm",
  formSteps: [
    {
      stepId: 1,
      stepName: "Step 1",
      stepDescription: "Step 1 Description",
      stepFields: [
        {
          element: "input",
          label: "First Name",
          type: "text",

          fieldValidation: {
            required: true,
            minLength: 3,
            maxLength: 20,
          },
        },
        {
          element: "select",
          label: "Gender",
          type: "select",
          options: ["Male", "Female", "Other"],
          fieldValidation: {
            required: true,
          },
        },
        {
          element: "input",
          label: "Email",
          type: "email",
          fieldValidation: {
            required: true,
          },
        },
      ],
    },
    {
      stepId: 2,
      stepName: "Step 2",
      stepDescription: "Step 2 Description",
      stepFields: [
        {
          element: "input",
          label: "Last Name",
          type: "text",
          fieldValidation: {
            required: true,
            minLength: 3,
            maxLength: 20,
          },
        },
        {
          element: "input",
          label: "Phone",
          type: "tel",
          fieldValidation: {
            required: true,
            minLength: 10,
            maxLength: 10,
          },
        },
        {
          element: "input",
          label: "Date of Birth",
          type: "date",
          fieldValidation: {
            required: true,
          },
        },
      ],
    },
    {
      stepId: 3,
      stepName: "Step 3",
      stepDescription: "Step 3 Description",
      stepFields: [
        {
          element: "input",
          label: "Password",
          type: "password",
          fieldValidation: {
            required: true,
            minLength: 6,
            maxLength: 20,
          },
        },
        {
          element: "input",
          label: "Confirm Password",
          type: "password",
          fieldValidation: {
            required: true,
            minLength: 6,
            maxLength: 20,
          },
        },
        {
          element: "textarea",
          label: "Address",
          type: "textarea",
          fieldValidation: {
            required: true,
            minLength: 10,
            maxLength: 100,
          },
        },
      ],
    },
    {
      stepId: 4,
      stepName: "Step 4",
      stepDescription: "Step 4 Description",
      stepFields: [
        {
          element: "input",
          label: "City",
          type: "text",
          fieldValidation: {
            required: true,
            minLength: 3,
            maxLength: 20,
          },
        },
        {
          element: "input",
          label: "State",
          type: "text",
          fieldValidation: {
            required: true,
            minLength: 3,
            maxLength: 20,
          },
        },
        {
          element: "input",
          label: "Pincode",
          type: "number",
          fieldValidation: {
            required: true,
            minLength: 6,
            maxLength: 6,
          },
        },
      ],
    },
  ],
} as IMultiStepFormObjData;


export default multiStepFormObjData
