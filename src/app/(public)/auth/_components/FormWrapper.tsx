// import {Card} from "@components/ui/card"
import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormWrapperProps {
children:ReactNode,
title:String,
header?:String,
}

function FormWrapper({ children,title,header }:FormWrapperProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardTitle>{header}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default FormWrapper;
