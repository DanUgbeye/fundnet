"use client";
import useActivateProfile from "@/hooks/use-activate-profile.hook";
import React, { useState } from "react";
import { Spinner } from "./decors";

export type ProfileActivationData = {
  refNumber: number;
  state: string;
};

export default function ProfileActivationForm() {
  const { activateProfile, loading } = useActivateProfile();
  const [formData, setFormData] = useState<ProfileActivationData>({
    refNumber: 0,
    state: "",
  });

  function handleInput(
    field: keyof ProfileActivationData,
    value: ProfileActivationData[keyof ProfileActivationData]
  ) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit() {}

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        activateProfile();
      }}
      className=" mx-auto flex h-16 w-full max-w-xl justify-center "
    >
      <input
        type="number"
        name="refNumber"
        id="refNumber"
        placeholder="Reference number"
        className=" w-full border border-transparent bg-[#141F3E] px-5 text-sm outline-0 placeholder:text-white/40 focus-visible:border-theme-green "
        value={formData.refNumber || ""}
        onChange={(e) => {
          const data = Number(e.target.value);
          handleInput("refNumber", data);
        }}
      />

      <button
        disabled={loading}
        className=" grid w-[8rem] place-items-center bg-theme-green font-medium text-white duration-300 hover:bg-theme-green/90 disabled:bg-theme-green/90 "
      >
        {loading ? <Spinner /> : "Activate"}
      </button>
    </form>
  );
}
