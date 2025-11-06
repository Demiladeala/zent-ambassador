"use client";
import BusinessToolKit from "../business-toolkit";
import { ApplicationForm } from "./application-form";

export function ApplicationContainer() {
  return (
    <div className="max-w-[3500px] mx-auto overflow-x-hidden">
      <ApplicationForm />
      <BusinessToolKit />
    </div>
  );
}
