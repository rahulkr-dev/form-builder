"use client";

import { useState } from "react";
import multiStepFormObjData from "./[formId]/feed";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const AllForms = () => {
  const [step, setStep] = useState(1);
  return (
    <div >
      <div className="flex justify-around">

      {multiStepFormObjData.formSteps.map((step) => (
        <div key={step.stepName} >
            <p>{step.stepName}</p>
            <p>{step.stepDescription}</p>
        </div>
      ))}
      </div>
      {
       multiStepFormObjData.formSteps[step-1].stepFields.map((field) => {
    return (
      <div key={field.label} className="flex flex-col gap-2">
      <label>{field.label}</label>
      {field.element === "input" && <Input type={field.type} />}
      {field.element === "select" && field.options && (
        <select>
          {field.options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      )}
    </div> 
    )
      }
      )}

      
      <div>
        <button onClick={()=>setStep(step-1)}>Prev</button>
        <button  onClick={()=>setStep(step+1)}>Next</button>
        </div>
      </div>
      
   
  );
};

export default AllForms;
